import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Grátis',
      description: 'Perfeito para projetos individuais explorar os recursos essenciais.',
      features: [
        '1 Agente Concorrente',
        '100 Ações por Dia',
        'Suporte a Projetos Locais',
        'Comunidade de Fóruns'
      ],
      cta: 'Começar com Starter',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: 'R$ 99/mês',
      description: 'Ideal para desenvolvedores seniores focados em máxima produtividade.',
      features: [
        '3 Agentes Concorrentes',
        'Ações Ilimitadas',
        'Integração Cloud e CI/CD',
        'Análise de Segurança Avançada',
        'Suporte Prioritário'
      ],
      cta: 'Assinar o Pro',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Sob Consulta',
      description: 'Para times escalando em larga escala com necessidades customizadas.',
      features: [
        'Agentes Ilimitados',
        'Modelos Treinados no Seu Código',
        'SSO e Controle de Acesso',
        'SLA de 99.9%',
        'Gerente de Contas Dedicado'
      ],
      cta: 'Falar com Vendas',
      highlighted: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary mb-4">Precificação Simples</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Mude a forma como você programa</h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Escolha um plano que se adapte ao tamanho da sua ambição. Escale da ideação gratuita ao controle massivo da sua infraestrutura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-3xl p-8 transition-transform duration-300 ${
                plan.highlighted 
                  ? 'bg-brand-surface border-2 border-brand-primary shadow-[0_0_40px_rgba(170,59,255,0.15)] scale-105 z-10' 
                  : 'glass border border-brand-border/50 hover:border-brand-border z-0'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <span className="bg-brand-primary text-white text-sm font-bold tracking-wide uppercase px-3 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>
                <div className="text-4xl font-bold text-white">
                  {plan.price}
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-brand-primary' : 'text-gray-400'}`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-full font-medium transition-all ${
                  plan.highlighted
                    ? 'bg-brand-primary hover:bg-brand-secondary text-white shadow-lg'
                    : 'glass text-white border border-brand-border hover:bg-white/5'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
