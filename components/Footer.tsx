import React from 'react';
import { Download } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleDownloadAssets = (e: React.MouseEvent) => {
    e.preventDefault();
    const svgContent = `
<svg width="1200" height="1600" viewBox="0 0 1200 1600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Cormorant+Garamond:ital,wght@0,400;1,400&display=swap');
      .serif { font-family: 'Cormorant Garamond', serif; }
      .sans { font-family: 'Montserrat', sans-serif; }
      .bg-dark { fill: #0F303E; }
      .bg-cyan { fill: #4CBCE4; }
      .bg-stone { fill: #fafaf9; }
      .text-dark { fill: #0F303E; }
      .text-light { fill: #fafaf9; }
      .text-cyan { fill: #4CBCE4; }
    </style>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" class="bg-stone"/>

  <!-- Brand Palette -->
  <rect x="50" y="50" width="100" height="100" class="bg-dark"/>
  <text x="50" y="170" class="sans text-dark" font-size="12">Brand Dark #0F303E</text>
  
  <rect x="170" y="50" width="100" height="100" class="bg-cyan"/>
  <text x="170" y="170" class="sans text-dark" font-size="12">Brand Cyan #4CBCE4</text>

  <!-- Logo Construction -->
  <text x="50" y="300" class="sans" font-weight="800" font-size="48" fill="#0F303E">Clicka<tspan fill="#4CBCE4">Ads</tspan></text>
  
  <!-- Typography Samples -->
  <text x="50" y="400" class="serif text-dark" font-size="60">Autoridade Digital</text>
  <text x="50" y="460" class="serif text-dark" font-size="60" font-style="italic">Tangível.</text>
  
  <text x="50" y="520" class="sans text-dark" font-size="24" font-weight="300">Inteligência Local + SEO + IA</text>
  
  <!-- UI Components -->
  <g transform="translate(50, 600)">
    <rect width="200" height="60" fill="#0F303E" rx="2"/>
    <text x="100" y="35" text-anchor="middle" class="sans text-light" font-weight="700" font-size="14" letter-spacing="2">PRIMARY BUTTON</text>
  </g>

  <g transform="translate(280, 600)">
    <rect width="200" height="60" fill="none" stroke="#0F303E" stroke-width="1" rx="2"/>
    <text x="100" y="35" text-anchor="middle" class="sans text-dark" font-weight="700" font-size="14" letter-spacing="2">SECONDARY</text>
  </g>

  <!-- Grid Layout Concept -->
  <rect x="50" y="750" width="340" height="400" fill="white" stroke="#e7e5e4"/>
  <rect x="50" y="750" width="340" height="10" class="bg-dark"/>
  <text x="70" y="800" class="serif text-dark" font-size="24">Card Premium</text>
  
  <rect x="420" y="750" width="340" height="400" class="bg-dark"/>
  <text x="440" y="800" class="serif text-light" font-size="24">Card Destaque</text>

</svg>
    `;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'clickaads-brand-assets.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <footer className="bg-brand-dark text-stone-400 py-20 px-6 border-t border-stone-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <a href="#" className="text-2xl font-sans font-extrabold tracking-tighter text-white block mb-6">
            Clicka<span className="text-brand-cyan">Ads</span>
          </a>
          <p className="text-xs font-light leading-relaxed max-w-xs text-stone-500">
            Elevando o padrão de negócios locais através de dados, design e inteligência artificial.
          </p>
        </div>

        <div className="col-span-1">
          <h5 className="text-xs uppercase tracking-widest text-stone-100 mb-6">Serviços</h5>
          <ul className="space-y-4 text-sm font-light">
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Google Meu Negócio</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">SEO Local</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Automação IA</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Web Design Premium</a></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h5 className="text-xs uppercase tracking-widest text-stone-100 mb-6">Legal</h5>
          <ul className="space-y-4 text-sm font-light">
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Privacidade</a></li>
          </ul>
        </div>

        <div className="col-span-1">
           <h5 className="text-xs uppercase tracking-widest text-stone-100 mb-6">Contato</h5>
           <address className="not-italic text-sm font-light space-y-4">
             <p>Av. Paulista, 1000 - São Paulo</p>
             <p>contato@clickaads.com</p>
             <div className="flex gap-4 mt-4">
                {/* Simple social placeholders */}
                <div className="w-8 h-8 border border-stone-800 flex items-center justify-center hover:border-brand-cyan hover:text-white transition-colors cursor-pointer">In</div>
                <div className="w-8 h-8 border border-stone-800 flex items-center justify-center hover:border-brand-cyan hover:text-white transition-colors cursor-pointer">Ig</div>
             </div>
           </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
        <p>&copy; {new Date().getFullYear()} ClickaAds. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
            <button 
                onClick={handleDownloadAssets}
                className="flex items-center gap-2 hover:text-brand-cyan transition-colors group"
            >
                <Download className="w-3 h-3 group-hover:animate-bounce" />
                <span>Download Brand Assets (SVG)</span>
            </button>
            <p>Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
};