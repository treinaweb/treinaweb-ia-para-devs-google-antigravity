import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-primary/20 blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-surface/50 text-brand-secondary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping"></span>
              A Nova Era do Desenvolvimento
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
              Codifique sem <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Limites</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              O Google Antigravity é o assistente de IA avançado que emparelha com você em tempo real. Escreva código mais rápido, resolva bugs complexos e construa projetos inteiros com ferramentas autônomas que elevam sua produtividade.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-dark font-medium text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group">
                Experimente Grátis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-brand-border glass text-white font-medium text-lg hover:bg-white/5 transition-colors">
                Ver Documentação
              </button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
            <div className="glass rounded-2xl p-6 border border-brand-border shadow-2xl skew-y-3 md:skew-y-6 hover:skew-y-0 transition-all duration-500 relative z-10">
              <div className="flex items-center gap-2 mb-4 border-b border-brand-border/50 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 text-gray-400 text-sm font-mono">
                  <Terminal className="w-4 h-4" /> index.tsx
                </div>
              </div>
              <pre className="font-mono text-sm text-left align-left overflow-x-auto">
                <code className="text-gray-300">
                  <span className="text-brand-secondary">import</span> {'{ antigravity }'} <span className="text-brand-secondary">from</span> <span className="text-green-400">'@google/antigravity'</span>;
                  <br /><br />
                  <span className="text-brand-secondary">const</span> <span className="text-blue-400">assistant</span> = <span className="text-brand-secondary">await</span> antigravity.init({`{`}
                  <br />
                  &nbsp;&nbsp;mode: <span className="text-green-400">'agentic'</span>,
                  <br />
                  &nbsp;&nbsp;tools: [<span className="text-green-400">'browser'</span>, <span className="text-green-400">'terminal'</span>]
                  <br />
                  {`}`});
                  <br /><br />
                  <span className="text-gray-500">// O assistente agora está autônomo.</span>
                  <br />
                  <span className="text-brand-secondary">await</span> assistant.solveTask({`{`}
                  <br />
                  &nbsp;&nbsp;prompt: <span className="text-green-400">'Crie a landing page'</span>
                  <br />
                  {`}`});
                </code>
              </pre>
            </div>
            
            {/* Decorative background orb for code block */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-brand-secondary/10 blur-[60px] -z-10"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
