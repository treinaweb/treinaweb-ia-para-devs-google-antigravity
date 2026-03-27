import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none tracking-tighter">g</span>
            </div>
            <span className="font-heading font-bold text-xl text-white tracking-tight">Antigravity</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Sobre a Ferramenta</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Por que Usar</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Precificação</a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-brand-primary hover:bg-brand-secondary transition-colors text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-[0_0_15px_rgba(170,59,255,0.3)] hover:shadow-[0_0_25px_rgba(170,59,255,0.5)]">
              Começar Agora
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-brand-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sobre a Ferramenta</a>
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Por que Usar</a>
            <a href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Precificação</a>
            <div className="mt-4 px-3">
              <button className="w-full bg-brand-primary text-white px-6 py-3 rounded-full text-base font-medium shadow-lg">
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
