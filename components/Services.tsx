import React from 'react';
import { Check, ChevronRight, MapPin, ShieldCheck, Zap, Clock } from 'lucide-react';
import { Button } from './Button';

interface PlanProps {
  title: string;
  oldPrice: string;
  price: string;
  duration: string;
  features: string[];
  isPremium?: boolean;
  description?: string;
  buttonText?: string;
}

const PlanCard: React.FC<PlanProps> = ({ 
  title, 
  oldPrice, 
  price, 
  duration,
  features, 
  isPremium = false, 
  description,
  buttonText = "Começar Agora"
}) => (
  <div className={`relative p-8 md:p-10 flex flex-col h-full transition-all duration-500 ${
    isPremium 
      ? 'bg-brand-dark text-white transform md:-translate-y-4 shadow-2xl shadow-stone-900/10 border border-brand-dark' 
      : 'bg-white text-stone-900 border border-stone-200 hover:border-brand-cyan/50 hover:shadow-lg'
  }`}>
    {isPremium && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-cyan text-brand-dark text-[10px] font-extrabold uppercase tracking-[0.2em] py-2 px-6 rounded-sm shadow-lg">
        Recomendado
      </div>
    )}
    
    <div className="mb-8">
      <h3 className={`font-serif text-3xl mb-3 ${isPremium ? 'text-white' : 'text-brand-dark'}`}>{title}</h3>
      {description && <p className={`text-sm font-light leading-relaxed ${isPremium ? 'text-stone-300' : 'text-stone-500'}`}>{description}</p>}
    </div>

    <div className="mb-8 pb-8 border-b border-dashed border-stone-300/30">
      <div className={`text-sm line-through mb-1 font-medium ${isPremium ? 'text-stone-500' : 'text-stone-400'}`}>
        De {oldPrice}
      </div>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-sm font-light opacity-80">Por</span>
        <span className={`text-4xl md:text-5xl font-bold tracking-tight ${isPremium ? 'text-brand-cyan' : 'text-brand-dark'}`}>{price}</span>
      </div>
      
      <div className="flex flex-wrap gap-2">
          <div className={`text-[10px] font-bold uppercase tracking-widest py-1 px-2 inline-flex items-center rounded border ${isPremium ? 'border-stone-700 text-stone-300' : 'border-stone-200 text-stone-500'}`}>
            <Clock className="w-3 h-3 mr-1" />
            {duration}
          </div>
          <div className={`text-[10px] font-bold uppercase tracking-widest py-1 px-2 inline-block rounded ${isPremium ? 'bg-brand-cyan/10 text-brand-cyan' : 'bg-brand-cyan/10 text-brand-dark'}`}>
            Até o fim de 2025
          </div>
      </div>
    </div>

    <ul className="space-y-5 mb-10 flex-grow">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start text-sm group">
          <Check className={`w-5 h-5 mr-3 mt-[-2px] flex-shrink-0 transition-transform group-hover:scale-110 ${isPremium ? 'text-brand-cyan' : 'text-brand-cyanDark'}`} />
          <span className={`${isPremium ? 'text-stone-300' : 'text-stone-600'} font-medium`}>{feature}</span>
        </li>
      ))}
    </ul>

    <div className="mt-auto">
      <a href="#contact" className="block w-full">
        <button className={`w-full py-4 px-6 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center group ${
          isPremium 
            ? 'bg-brand-cyan text-brand-dark hover:bg-white' 
            : 'bg-brand-dark text-white hover:bg-brand-cyanDark'
        }`}>
          {buttonText}
          <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </a>
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-brand-dark leading-[1.1] mb-6">
            Planos de <br/>
            <span className="italic text-brand-cyanDark">Aceleração Local</span>
          </h2>
          <p className="text-stone-600 font-light text-lg leading-relaxed">
            Estruturas de crescimento desenhadas para posicionar sua empresa como líder de mercado. 
            Condições exclusivas por tempo limitado.
          </p>
        </div>

        {/* Informational Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-y border-stone-200 py-12">
            <div className="flex flex-col items-center text-center space-y-4 p-4">
                <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center mb-2">
                    <MapPin className="w-6 h-6 text-brand-dark" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">Geolocalização Dominante</h3>
                <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
                    Estratégias de pino e raio para expandir sua área de cobertura e posicionar sua empresa como a principal referência local.
                </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-4 border-t md:border-t-0 md:border-l border-stone-100">
                <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-2">
                    <ShieldCheck className="w-6 h-6 text-brand-cyan" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">Blindagem de Marca</h3>
                <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
                    Proteção ativa contra edições maliciosas e gestão profissional de crises em avaliações negativas.
                </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-4 border-t md:border-t-0 md:border-l border-stone-100">
                <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center mb-2">
                    <Zap className="w-6 h-6 text-brand-dark" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">Conversão Acelerada</h3>
                <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
                    Otimização de ficha técnica e fotos profissionais para transformar visualizações em ligações reais.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-center">
          <PlanCard 
            title="Otimização Prova Social"
            oldPrice="R$897"
            price="R$647"
            duration="30 Dias"
            description="Para negócios que precisam construir uma base sólida de confiança digital imediatamente."
            features={[
              "Otimização Completa do Perfil (GBP)",
              "Gestão de Avaliações e Respostas",
              "Proteção contra edições indevidas",
              "Relatório Mensal de Performance",
              "Suporte via WhatsApp"
            ]}
          />
          
          <PlanCard 
            title="Otimização Estratégica"
            oldPrice="R$2197"
            price="R$1797"
            duration="90 Dias"
            isPremium={true}
            description="Ideal para empresas em fase de expansão que buscam superar concorrentes locais."
            features={[
              "Tudo do plano Prova Social",
              "Pesquisa Avançada de Palavras-chave",
              "Análise de Concorrência Local",
              "2 Postagens Semanais Otimizadas",
              "Geo-tagging de Imagens",
              "SEO On-page Básico"
            ]}
          />

          <PlanCard 
            title="Otimização Premium"
            oldPrice="R$3497"
            price="R$2897"
            duration="120 Dias"
            buttonText="Solicitar Consultoria VIP"
            description="A solução definitiva. Combine inteligência de dados com produção visual de alta qualidade."
            features={[
              "Tudo do plano Estratégico",
              "Fotos Profissionais (Fotógrafo Incluso)",
              "Consultoria Mensal de Conversão",
              "Implementação de Chatbot IA",
              "Gestão de Tráfego (Setup)",
              "Acesso Prioritário à Equipe"
            ]}
          />
        </div>
      </div>
    </section>
  );
};