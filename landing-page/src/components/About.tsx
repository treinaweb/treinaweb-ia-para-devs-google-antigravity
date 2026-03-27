import { BrainCircuit, Cpu, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary mb-4">Sobre a Ferramenta</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">O que é o Google Antigravity?</h3>
          <p className="text-lg text-gray-400">
            É o companheiro de programação construído com IA de ponta para entender sua base de código, prever suas necessidades e gerar soluções complexas em segundos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
          {[
            {
              icon: BrainCircuit,
              title: 'IA Contextual Inteligente',
              description: 'Ele entende todo o seu ecossistema de projeto, não apenas arquivos isolados. Suas sugestões são moldadas pela sua arquitetura e padrões.'
            },
            {
              icon: Zap,
              title: 'Execução Autônoma',
              description: 'Mais do que autocompletar. O Antigravity usa ferramentas nativamente, executando comandos, lendo arquivos e navegando na web para resolver sua tarefa.'
            },
            {
              icon: Cpu,
              title: 'Projetado para Performance',
              description: 'Integração perfeita no seu fluxo de trabalho atual. Acelere seu ciclo de desenvolvimento e foque apenas no pensamento criativo.'
            }
          ].map((feature, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-brand-primary/20 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-brand-secondary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
