import { useState } from 'react';

/**
 * Type definition for a FAQ item.
 */
type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "O Google Antigravity é gratuito?",
    answer: "Temos um plano gratuito (Lite) perfeito para testar a ferramenta e planos pagos que oferecem suporte a recursos avançados para profissionais e equipes maiores."
  },
  {
    question: "Como funciona a integração com minha IDE?",
    answer: "Oferecemos extensões nativas para VS Code, IntelliJ e as principais ferramentas de desenvolvimento. A instalação é super rápida e leva apenas alguns minutos."
  },
  {
    question: "Meus dados e código-fonte estão seguros?",
    answer: "Sim. O Google Antigravity utiliza encriptação de ponta a ponta e possui diretrizes rigorosas de privacidade. Nós não treinamos nossos modelos com o código-fonte proprietário da sua empresa na versão Enterprise."
  },
  {
    question: "Preciso ter conhecimento prévio em IA para usar?",
    answer: "Não! A interface foi desenhada para ser intuitiva. Você pode acessar todos os benefícios através de comandos simples e interações em linguagem natural."
  }
];

/**
 * Faq component that renders a list of frequently asked questions inside an accordion format.
 * 
 * @returns {JSX.Element} The rendered FAQ section.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /**
   * Toggles the accordion state for a specific FAQ item index.
   * 
   * @param index - Index of the item to toggle. If already opened, closes it.
   */
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-dark relative border-t border-white/5 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400 mb-6 drop-shadow-sm">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-400">
            Encontre respostas para as principais dúvidas sobre o Google Antigravity.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden bg-[#111116] hover:bg-[#181820] transition-colors duration-300 backdrop-blur-sm"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium text-white pr-8">{item.question}</h3>
                <span className={`flex-shrink-0 ml-4 text-brand-primary transform transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
