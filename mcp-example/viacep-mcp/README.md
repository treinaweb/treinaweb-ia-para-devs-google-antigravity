# ViaCEP MCP Server

MCP server for ViaCEP API integration. This project provides a Model Context Protocol (MCP) server that seamlessly integrates with the [ViaCEP](https://viacep.com.br/) API to fetch address information based on a valid Brazilian postal code (CEP).

## Tech Stack

This project was built using the following technologies:

- **Node.js**
- **TypeScript**
- **@modelcontextprotocol/sdk** (MCP SDK)
- **Zod** (for schema validation)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have Node.js and npm installed on your system.

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd viacep-mcp
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server

- **Development mode** (using `ts-node`):
  ```bash
  npm run dev
  ```

- **Build the project** (compiles TypeScript to JavaScript in the `dist` directory):
  ```bash
  npm run build
  ```

- **Run in production** (runs the compiled output):
  ```bash
  npm run build
  npm start
  ```

## Features

- **ViaCEP Integration Tool**: Exposes an MCP tool that accepts a Brazilian CEP as input and returns the associated address details (street, neighborhood, city, state, etc.).
- **Data Validation**: Automatically validates the user input using `zod` to ensure that only properly formatted CEPs are queried.
- **Robust Error Handling**: Gracefully handles invalid CEPs and non-existent addresses as outlined in the ViaCEP API documentation.
- **TypeScript Support**: Provides strong typing for better development experience and reliability.

## Project Structure

```text
viacep-mcp/
├── dist/                # Compiled JavaScript files (generated after build)
├── src/                 # Source files
│   └── index.ts         # Main server implementation and MCP tool definition
├── package.json         # Project metadata, scripts, and dependencies
├── tsconfig.json        # TypeScript compiler configuration
└── ...
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the standard MIT/ISC terms (refer to the repository owner for specific license details if not provided).
