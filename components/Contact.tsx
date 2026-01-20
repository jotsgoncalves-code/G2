import React, { useState } from 'react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pelo interesse. Entraremos em contato em breve.");
  };

  return (
    <section id="contact" className="py-32 px-6 bg-stone-50 relative overflow-hidden">
      {/* Decorative minimal background line */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-stone-200 hidden md:block"></div>

      <div className="max-w-4xl mx-auto relative z-10 bg-white p-8 md:p-16 border border-stone-100 shadow-sm">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-stone-900 mb-4">Inicie o Diálogo</h2>
          <p className="text-stone-500 font-light">
            Descubra se sua empresa é elegível para nossa metodologia.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-stone-400 font-medium">Seu Nome</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                placeholder="Ex: João Silva"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-xs uppercase tracking-widest text-stone-400 font-medium">Empresa</label>
              <input 
                type="text" 
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                className="w-full border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                placeholder="Ex: Silva Arquitetura"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs uppercase tracking-widest text-stone-400 font-medium">E-mail Corporativo</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
              placeholder="joao@silvaarquitetura.com"
              required
            />
          </div>

          <div className="pt-8 text-center">
            <Button type="submit" icon>Solicitar Auditoria</Button>
            <p className="mt-4 text-xs text-stone-400">
              Respeitamos sua privacidade. Zero spam.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};