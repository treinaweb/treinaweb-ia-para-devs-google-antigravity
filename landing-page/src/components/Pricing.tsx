import PricingCard from './PricingCard';

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
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
