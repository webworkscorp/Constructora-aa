
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Proceso', id: 'proceso' },
    { name: 'Contacto', id: 'agendar' },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo sin fondo aparente y mucho más grande */}
            <button 
              onClick={() => handleScroll('inicio')} 
              className={`flex items-center group transition-all duration-700 transform ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            >
              <img 
                src="https://i.imgur.com/3PIVJ9n.jpeg" 
                alt="Logo Constructora AA" 
                className="h-16 md:h-24 w-auto object-contain transition-transform group-hover:scale-105 mix-blend-multiply"
              />
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.id)}
                  className={`px-3 py-2 text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-300 ${isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary drop-shadow-md'}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-secondary' : 'text-white'}`}>
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white h-screen fixed inset-0 z-40 flex flex-col justify-center items-center space-y-8">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-secondary text-3xl">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <img 
            src="https://i.imgur.com/3PIVJ9n.jpeg" 
            alt="Logo" 
            className="h-24 w-auto mb-10 mix-blend-multiply"
          />
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className="text-2xl font-black text-secondary uppercase hover:text-primary tracking-tighter"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
