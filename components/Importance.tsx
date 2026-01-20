import React from 'react';
import { TrendingUp, Users, MousePointerClick, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const Importance: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom luxury cubic-bezier
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="py-24 px-6 bg-white border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-block border-b-2 border-brand-cyan mb-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">
                Dados de Mercado
                </span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl text-brand-dark leading-[1.1] mb-8">
              Otimização profissional <br />
              não é luxo. <br />
              <span className="italic text-brand-cyan">É sobrevivência.</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-stone-600 text-lg font-light leading-relaxed mb-8">
              A maioria dos empresários subestima o poder de um perfil gerido tecnicamente. 
              Enquanto você lê isto, seu cliente está buscando o seu serviço. A única questão é: 
              ele vai encontrar você ou seu concorrente?
            </motion.p>

            <motion.div variants={fadeInUp} className="p-6 bg-stone-50 border-l-4 border-brand-dark rounded-r-sm">
               <p className="text-stone-700 font-medium italic text-sm md:text-base">
                 "Empresas com perfis completos e otimizados no Google recebem, em média, 7x mais cliques do que perfis incompletos."
               </p>
               <div className="flex items-center mt-3 gap-2">
                 <div className="h-px w-8 bg-stone-300"></div>
                 <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Google Internal Data</p>
               </div>
            </motion.div>
          </motion.div>
          
          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
             {/* Stat 1 */}
             <motion.div variants={fadeInUp} className="bg-stone-50 p-8 border border-stone-100 hover:border-brand-cyan/30 hover:shadow-lg transition-all duration-300 group h-full">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-4xl font-extrabold text-brand-dark group-hover:text-brand-cyan transition-colors">46%</h3>
                   <Search className="w-5 h-5 text-stone-300 group-hover:text-brand-cyan transition-colors" />
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  De todas as pesquisas realizadas no Google possuem <strong>intenção local</strong>. É a maior fonte de tráfego qualificado do mundo.
                </p>
             </motion.div>
             
             {/* Stat 2 */}
             <motion.div variants={fadeInUp} className="bg-brand-dark p-8 border border-brand-dark shadow-xl h-full">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-4xl font-extrabold text-white">76%</h3>
                   <TrendingUp className="w-5 h-5 text-brand-cyan" />
                </div>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Dos usuários que buscam algo próximo no smartphone <strong>visitam o negócio em 24h</strong>. A conversão é quase imediata.
                </p>
             </motion.div>
             
             {/* Stat 3 */}
             <motion.div variants={fadeInUp} className="bg-stone-50 p-8 border border-stone-100 hover:border-brand-cyan/30 hover:shadow-lg transition-all duration-300 group h-full">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-4xl font-extrabold text-brand-dark group-hover:text-brand-cyan transition-colors">+100%</h3>
                   <MousePointerClick className="w-5 h-5 text-stone-300 group-hover:text-brand-cyan transition-colors" />
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Perfis com fotos profissionais recebem <strong>42% mais rotas</strong> e <strong>35% mais cliques</strong> para o site do que a média.
                </p>
             </motion.div>

             {/* Stat 4 */}
             <motion.div variants={fadeInUp} className="bg-stone-50 p-8 border border-stone-100 hover:border-brand-cyan/30 hover:shadow-lg transition-all duration-300 group h-full">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-4xl font-extrabold text-brand-dark group-hover:text-brand-cyan transition-colors">3.2s</h3>
                   <Users className="w-5 h-5 text-stone-300 group-hover:text-brand-cyan transition-colors" />
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  É o tempo médio que um usuário leva para decidir se confia ou não na sua marca baseada nas <strong>primeiras 3 avaliações</strong>.
                </p>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};