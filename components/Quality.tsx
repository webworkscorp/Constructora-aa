
import React from 'react';

const Quality: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-neutralBg py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center space-x-6 mb-10">
            <div className="h-[2px] w-16 bg-primary/20"></div>
            <div className="w-16 h-16 bg-white shadow-xl flex items-center justify-center rotate-45 border-4 border-primary">
              <i className="fa-solid fa-check text-primary text-2xl -rotate-45"></i>
            </div>
            <div className="h-[2px] w-16 bg-primary/20"></div>
        </div>
        <h3 className="text-4xl md:text-7xl font-black uppercase italic mb-8 tracking-tighter text-secondary leading-none">
          CONSTRUIMOS <span className="text-primary not-italic">CON ORGULLO</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="text-xs font-black uppercase tracking-widest">Diseñamos contigo</div>
           <div className="text-xs font-black uppercase tracking-widest">Construimos con precisión</div>
           <div className="text-xs font-black uppercase tracking-widest">Entregamos con orgullo</div>
        </div>
        <p className="text-xl text-gray-500 font-light leading-relaxed italic">
          "Tu hogar, tu inversión es nuestra responsabilidad. En Constructora AA SRL trabajamos con mano de obra experta para hacer realidad su espacio."
        </p>
      </div>
    </div>
  );
};

export default Quality;
