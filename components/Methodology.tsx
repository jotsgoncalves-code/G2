import React from 'react';

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-32 px-6 bg-brand-dark text-stone-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
           {/* Abstract decorative elements */}
           <div className="aspect-square max-w-md mx-auto border border-stone-700/50 relative">
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-stone-800/50"></div>
              <div className="absolute top-0 left-0 w-full h-full border border-brand-cyan/20 transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://picsum.photos/800/800?grayscale" 
                alt="Architecture of Success" 
                className="absolute top-0 left-0 w-full h-full object-cover opacity-30 mix-blend-overlay grayscale contrast-125"
              />
           </div>
        </div>

        <div className="space-y-12">
          <div>
            <span className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Nossa Filosofia
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-white">
              Menos ruído. <br />
              Mais <span className="text-brand-cyan italic">sinal</span>.
            </h2>
            <p className="text-stone-400 font-light text-lg leading-relaxed">
              O marketing digital moderno é barulhento. Nós vamos na contramão. Acreditamos na precisão cirúrgica sobre o volume excessivo. 
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <span className="font-serif text-2xl text-brand-cyan">01.</span>
              <div>
                <h4 className="text-lg font-medium mb-2 text-stone-100">Fundação Sólida</h4>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Antes de acelerar, estabilizamos. Corrigimos inconsistências em dados (NAP), otimizamos a velocidade do site e garantimos que sua "casa digital" esteja impecável.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <span className="font-serif text-2xl text-brand-cyan">02.</span>
              <div>
                <h4 className="text-lg font-medium mb-2 text-stone-100">Expansão de Autoridade</h4>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Criamos relevância semântica e geográfica. O Google passa a entender o seu negócio como a referência absoluta no seu nicho local.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <span className="font-serif text-2xl text-brand-cyan">03.</span>
              <div>
                <h4 className="text-lg font-medium mb-2 text-stone-100">Retenção Automática</h4>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Implementamos sistemas de IA que nutrem leads e solicitam avaliações automaticamente, criando um ciclo virtuoso de reputação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};