import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 px-6 overflow-hidden bg-stone-50">
      
      {/* Abstract Background Element (Parallax Layer 0 - Moving Up) */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-brand-cyan/5 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"
        style={{ transform: `translate(20%, -20%) translateY(${scrollY * -0.15}px)` }}
      ></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-10">
          <div 
            className="inline-block border-b border-brand-cyan/50 pb-1 opacity-0 animate-fade-in-scale"
            style={{ animationDelay: '100ms' }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyanDark">
              Inteligência de Negócios Locais
            </span>
          </div>
          
          <h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-brand-dark opacity-0 animate-fade-in-scale"
            style={{ animationDelay: '300ms' }}
          >
            Autoridade digital <br />
            <span className="italic text-stone-500 relative inline-block">
              tangível
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-brand-cyan/20"></span>
            </span> para <br />
            negócios reais.
          </h1>
          
          <p 
            className="max-w-xl text-lg font-light text-stone-600 leading-relaxed opacity-0 animate-fade-in-scale"
            style={{ animationDelay: '500ms' }}
          >
            Unimos SEO técnico, gestão premium de Google Meu Negócio e Inteligência Artificial para posicionar sua empresa como a única escolha lógica na sua região.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-6 pt-4 opacity-0 animate-fade-in-scale"
            style={{ animationDelay: '700ms' }}
          >
            <a href="#services">
                <Button icon>Ver Planos de Aceleração</Button>
            </a>
            <a href="#contact">
                <Button variant="outline">Agendar Auditoria</Button>
            </a>
          </div>
        </div>

        {/* Right Content / Multi-Layer Parallax Visuals */}
        <div className="lg:col-span-5 relative hidden lg:block h-[600px]">
            {/* Layer 1: Base Grid Lines (Slow movement) */}
            <div 
                className="absolute top-10 right-10 w-full h-full border-r border-t border-stone-200 opacity-50"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            ></div>
            
            {/* Layer 2: Main Image / Abstract Shape Placeholder */}
            <div 
                className="absolute top-0 right-0 w-4/5 h-4/5 border border-brand-dark/10 bg-stone-100/50 backdrop-blur-sm overflow-hidden"
                style={{ transform: `translateY(${scrollY * 0.08}px)` }}
            >
                 <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-brand-cyan/10"></div>
            </div>

            {/* Layer 3: Stat Card 1 (Static - No Parallax) */}
            <div 
                className="absolute bottom-32 right-8 w-64 text-right z-20"
            >
                <div className="block opacity-0 animate-fade-in-scale bg-white/80 backdrop-blur-md p-6 shadow-sm border border-stone-100" style={{ animationDelay: '900ms' }}>
                    <span className="block text-4xl font-serif text-brand-dark mb-1">+140%</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Visibilidade Orgânica</span>
                </div>
            </div>

            {/* Layer 4: Stat Card 2 (Static - No Parallax) */}
            <div 
                className="absolute bottom-8 right-48 w-56 text-left z-30"
            >
                <div className="block opacity-0 animate-fade-in-scale bg-brand-dark text-white p-6 shadow-xl" style={{ animationDelay: '1100ms' }}>
                    <span className="block text-4xl font-serif text-brand-cyan mb-1">3x</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Conversão Local</span>
                </div>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-500"
        style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
      >
        <ChevronDown className="w-6 h-6 text-stone-400 animate-bounce" strokeWidth={1} />
      </div>
    </section>
  );
};