const Footer = () => {
  return (
    <footer className="border-t border-brand-border/50 py-12 mt-12 bg-brand-dark/50 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center">
               <span className="text-white font-bold text-xs leading-none">g</span>
            </div>
            <span className="font-heading font-bold text-lg text-white">Antigravity</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-brand-secondary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-brand-secondary transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-brand-secondary transition-colors">Documentação</a>
            <a href="#" className="hover:text-brand-secondary transition-colors">Contato</a>
          </div>

        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Google LLC. Fictitious landing page for demonstration.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
