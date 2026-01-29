
import React from 'react';

const mainServices = [
  {
    icon: 'fa-pen-ruler',
    name: "Diseño & Trámites",
    description: "Diseño de proyectos, trámites y llave en mano.",
    items: ["Diseño de Proyectos", "Trámites", "Llave en Mano"]
  },
  {
    icon: 'fa-trowel-bricks',
    name: "Infraestructura",
    description: "Movimiento de tierra, infraestructura, muros y electromecánica.",
    items: ["Movimiento de Tierra", "Infraestructura", "Muros", "Electromecánica"]
  },
  {
    icon: 'fa-screwdriver-wrench',
    name: "Mantenimiento",
    description: "Muebles, remodelación, cocinas, restauración y paisajismo.",
    items: ["Remodelación", "Cocinas y Muebles", "Restauración", "Paisajismo"]
  }
];

const technicalServices = [
  "Ampliaciones", "Remodelaciones", "Pintura", "Fontanería", "Electricidad", 
  "Tratamiento de goteras en techos", "Cambio de techos", "Canoas", "Pisos", "Soldadura", 
  "Destaqueos", "Limpieza de sépticos", "Trampagrasas", "Ventanas", "Puertas", 
  "Fugas de agua", "Aceras", "Impermeabilización", "Cambio de cielos"
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-primary text-[10px] font-black uppercase tracking-[0.5em] mb-4">¿Buscas construir o remodelar?</h2>
        <h3 className="text-4xl md:text-6xl font-black text-secondary uppercase leading-none tracking-tighter mb-8">
          NUESTROS <span className="text-primary italic">SERVICIOS</span>
        </h3>
        <p className="text-lg text-gray-500 font-light leading-relaxed">
          Ofrecemos soluciones profesionales en cada etapa de su obra o mantenimiento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {mainServices.map((service, idx) => (
          <div key={idx} className="group transition-all duration-500 p-8 hover:bg-neutralBg">
            <div className="text-primary mb-8 transition-transform duration-500 group-hover:-translate-y-2">
              <i className={`fa-solid ${service.icon} text-5xl`}></i>
            </div>
            <h4 className="text-xl font-black text-secondary uppercase mb-4 tracking-tighter">{service.name}</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light italic">
              {service.description}
            </p>
            <div className="h-[2px] w-12 bg-primary/20 mb-8 group-hover:w-20 transition-all duration-500 group-hover:bg-primary"></div>
            <ul className="space-y-3">
              {service.items.map((item, i) => (
                <li key={i} className="text-[11px] font-black uppercase tracking-widest text-secondary/70 flex items-center">
                  <i className="fa-solid fa-chevron-right text-primary mr-3 text-[8px]"></i> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-20 p-8 bg-neutralBg border-l-4 border-primary">
        <h4 className="text-xs font-black uppercase tracking-widest text-secondary mb-6">Especialidades Técnicas:</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technicalServices.map((tech, i) => (
            <div key={i} className="text-[10px] font-bold text-gray-500 uppercase tracking-tight flex items-center">
               <span className="w-1.5 h-1.5 bg-primary mr-2"></span> {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 pt-16 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h4 className="text-2xl font-black text-secondary uppercase tracking-tighter mb-4 italic">¿PROYECTO <span className="text-primary not-italic">LLAVE EN MANO?</span></h4>
          <p className="text-gray-500 text-sm font-light">Nos encargamos de todo el proceso con responsabilidad y orden.</p>
        </div>
        <button
          onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-secondary text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all duration-300"
        >
          Consultar ahora
        </button>
      </div>
    </div>
  );
};

export default Services;
