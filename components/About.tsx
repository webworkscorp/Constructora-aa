
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative z-10 border-8 border-white shadow-2xl overflow-hidden">
            <img
              src="https://i.imgur.com/5KVOCgb.jpeg"
              alt="Constructora AA SRL"
              className="w-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-primary text-white p-10 hidden md:block shadow-2xl">
            <p className="text-4xl font-black tracking-tighter italic uppercase">SOLIDEZ AA</p>
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-80 mt-2">Dedicación y Precisión</p>
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-100 -z-10 rounded-full"></div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4">La Empresa</h2>
            <h3 className="text-4xl md:text-6xl font-black text-secondary leading-none uppercase tracking-tighter">
              MANO DE OBRA <br/> <span className="text-primary italic">EXPERTA</span>
            </h3>
          </div>
          
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
            <p>
              En <span className="text-secondary font-bold">Constructora AA SRL</span> somos una empresa de Costa Rica enfocada en soluciones reales. Lo hacemos realidad con dedicación, transparencia y mano de obra experta.
            </p>
            <p>
              Nuestro compromiso es con su inversión. Nos encargamos de que cada proyecto se ejecute con profesionalismo y solidez técnica, garantizando resultados que cumplen con sus necesidades.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-gray-100">
              <div className="group">
                <p className="text-4xl font-black text-secondary group-hover:text-primary transition-all tracking-tighter uppercase italic leading-tight">100%</p>
                <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Compromiso</p>
              </div>
              <div className="group">
                <p className="text-4xl font-black text-secondary group-hover:text-primary transition-all tracking-tighter uppercase italic leading-tight">CR</p>
                <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Local</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
