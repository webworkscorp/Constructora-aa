
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/NoskoPH.jpeg"
          alt="Constructora AA Proyectos"
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
            RENOVÁ <br/> TU <span className="text-primary italic">NEGOCIO</span> <br/> REPARÁ TU CASA
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-xl font-light leading-relaxed">
            Tu hogar, tu inversión es nuestra responsabilidad. Lo hacemos realidad con dedicación, transparencia y mano de obra experta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-primary text-white font-black hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-xs shadow-2xl"
            >
              Contactar Ahora
            </button>
            <button
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 border-2 border-white/20 text-white font-black hover:bg-white/10 transition-all uppercase tracking-widest text-xs"
            >
              Ver Servicios
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 hidden md:block">
        <i className="fa-solid fa-chevron-down text-2xl"></i>
      </div>
    </div>
  );
};

export default Hero;
