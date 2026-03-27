#!/usr/bin/env node
/**
 * Main entry point for the ViaCEP MCP server.
 * Provides a Model Context Protocol tool to query Brazilian zip codes (CEP).
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

/**
 * Interface representing the response from the ViaCEP API.
 */
interface ViaCepResponse {
  [key: string]: unknown;
  cep?: string;
  logradouro?: string;
  complemento?: string;
  unidade?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  estado?: string;
  regiao?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
  erro?: string | boolean;
}

/**
 * Initialize the MCP Server.
 */
const server = new McpServer({
  name: "viacep-mcp-server",
  version: "1.0.0"
});

/**
 * Schema for the input parameters of the ViaCEP query tool.
 */
const ConsultCepSchema = z.object({
  cep: z.string()
    .regex(/^[0-9]{8}$|^[0-9]{5}-[0-9]{3}$/, "The CEP must have 8 digits, with or without a hyphen.")
    .describe("The Brazilian ZIP code (CEP) to be queried (e.g., 01001-000 or 01001000).")
});

/**
 * Type inferred from the ConsultCepSchema.
 */
type ConsultCepInput = z.infer<typeof ConsultCepSchema>;

/**
 * Register the 'consult_cep' tool to search for an address by its CEP.
 */
server.registerTool(
  "consult_cep",
  {
    title: "Consult CEP",
    description: "Fetches information about a Brazilian address given its CEP (ZIP code) using the ViaCEP API.",
    inputSchema: ConsultCepSchema,
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: true
    }
  },
  async ({ cep }: ConsultCepInput) => {
    // Remove hyphen if present
    const cleanCep = cep.replace("-", "");

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      
      if (!response.ok) {
        if (response.status === 400) {
          return {
            content: [{ type: "text", text: JSON.stringify({ erro: "true", details: "Invalid CEP format." }) }],
            isError: true
          };
        }
        return {
          content: [{ type: "text", text: `Error: The request failed with status ${response.status}.` }],
          isError: true
        };
      }

      const data = await response.json() as ViaCepResponse;

      if (data.erro === "true" || data.erro === true) {
        return {
          content: [{ type: "text", text: JSON.stringify({ erro: "true" }, null, 2) }],
          structuredContent: { erro: "true" }
        };
      }

      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        structuredContent: data
      };
    } catch (error: unknown) {
      const errorMessage: string = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `Error querying the ViaCEP API: ${errorMessage}` }],
        isError: true
      };
    }
  }
);

/**
 * Main function to start the standard IO server transport.
 */
async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("ViaCEP MCP server is running via stdio");
}

main().catch((err: unknown) => {
  console.error("Fatal error starting server:", err);
  process.exit(1);
});
