import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-gray-300 font-sans selection:bg-brand-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
