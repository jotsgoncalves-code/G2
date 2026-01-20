import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Importance } from './components/Importance';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-50 text-stone-900 overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Importance />
        <Services />
        <Methodology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;