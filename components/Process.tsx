
import React from 'react';

const Process: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
      <div className="max-w-3xl">
        <div className="bg-gray-50 p-10 md:p-16 relative border border-gray-100 shadow-sm">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <h2 className="text-primary text-[10px] font-black uppercase tracking-[0.5em] mb-6">Constructora AA</h2>
          <h3 className="text-3xl md:text-4xl font-black text-secondary uppercase italic mb-12 tracking-tighter">Proceso de <span className="text-primary">Trabajo</span></h3>
          
          <div className="space-y-12">
            {[
              { num: '01', title: 'Visión', desc: 'Entendemos su necesidad y definimos el alcance técnico de manera clara.' },
              { num: '02', title: 'Diseño', desc: 'Desarrollamos planos y gestionamos los trámites correspondientes.' },
              { num: '03', title: 'Ejecución', desc: 'Llevamos a cabo la obra con mano de obra experta y materiales adecuados.' },
              { num: '04', title: 'Entrega', desc: 'Entregamos su proyecto listo para su uso con garantía técnica.' }
            ].map((step, i) => (
              <div key={i} className="flex items-start space-x-8">
                <span className="text-2xl font-black text-primary leading-none italic border-b-2 border-primary pb-1">{step.num}</span>
                <div className="pt-1">
                  <h4 className="text-[12px] font-black text-secondary uppercase mb-2 tracking-[0.2em]">{step.title}</h4>
                  <p className="text-gray-500 text-[12px] font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
