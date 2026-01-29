
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-white py-24 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="md:col-span-2">
            <div className="mb-10">
              <span className="text-4xl font-black tracking-tighter uppercase leading-none">
                CONSTRUCTORA <span className="text-primary italic">AA</span>
              </span>
              <p className="text-primary text-[10px] font-bold uppercase tracking-[0.5em] mt-3 opacity-60 italic leading-none">REFORMA DISEÑO Y CONSTRUCCIÓN</p>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm text-sm font-light italic">
              Empresa costarricense enfocada en soluciones constructivas. Especialistas en diseño, remodelación y mantenimiento profesional en todo el país.
            </p>
          </div>
          
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-primary mb-10">Mapa del Sitio</h4>
            <ul className="space-y-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              <li><button onClick={(e) => handleScroll(e, 'inicio')} className="hover:text-primary transition-colors">Inicio</button></li>
              <li><button onClick={(e) => handleScroll(e, 'nosotros')} className="hover:text-primary transition-colors">Nosotros</button></li>
              <li><button onClick={(e) => handleScroll(e, 'servicios')} className="hover:text-primary transition-colors">Servicios</button></li>
              <li><button onClick={(e) => handleScroll(e, 'agendar')} className="text-white hover:text-primary transition-all flex items-center group">
                <span className="mr-2">Contacto</span>
                <i className="fa-solid fa-arrow-right-long opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"></i>
              </button></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">
          <p>© {currentYear} CONSTRUCTORA AA SRL. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
             <span className="hover:text-primary transition-colors cursor-default">DISEÑO</span>
             <span className="hover:text-primary transition-colors cursor-default">SOLIDEZ</span>
             <span className="hover:text-primary transition-colors cursor-default">HONESTIDAD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
