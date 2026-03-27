import { Code2, Globe, Server, ShieldCheck, TerminalSquare, Workflow } from 'lucide-react';

const Features = () => {
  const featuresList = [
    { icon: TerminalSquare, title: 'Integração com Terminal', description: 'Ele executa comandos para testar e validar o código antes de entregá-lo.' },
    { icon: Globe, title: 'Pesquisa e Navegação Web', description: 'Realiza buscas na web e lê documentações atualizadas instantaneamente.' },
    { icon: Code2, title: 'Refatoração em Massa', description: 'Altere centenas de arquivos com segurança através de edições em lote orientadas por IA.' },
    { icon: ShieldCheck, title: 'Correção Automática', description: 'Identifica vulnerabilidades e propõe correções de segurança proativamente.' },
    { icon: Server, title: 'Compreensão de Backend', description: 'Domina infraestrutura, bancos de dados, APIs e pipelines CI/CD.' },
    { icon: Workflow, title: 'Criação de Workflows', description: 'Gere scripts e fluxos de trabalho personalizados para sua equipe.' },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="md:w-1/3">
            <h2 className="text-brand-primary font-medium tracking-wider uppercase text-sm mb-3">Por que Usar</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A vantagem desleal para desenvolvedores
            </h3>
            <p className="text-lg text-gray-400 mb-8">
              O Google Antigravity eleva suas habilidades para o próximo nível. Não substitui você, apenas remove todo o peso das tarefas repetitivas e cognitivamente custosas.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuresList.map((feature, idx) => (
              <div key={idx} className="group p-6 rounded-2xl bg-brand-surface border border-brand-border/50 hover:border-brand-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-lg bg-brand-dark group-hover:bg-brand-primary/10 transition-colors">
                    <feature.icon className="w-6 h-6 text-gray-400 group-hover:text-brand-secondary transition-colors" />
                  </div>
                  <h4 className="text-[1.1rem] font-bold text-gray-200 group-hover:text-white transition-colors">{feature.title}</h4>
                </div>
                <p className="text-gray-500 group-hover:text-gray-400 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;
