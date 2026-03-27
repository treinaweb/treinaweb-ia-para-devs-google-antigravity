import { Check } from 'lucide-react';

interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    highlighted: boolean;
  };
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <div 
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
  );
};

export default PricingCard;
