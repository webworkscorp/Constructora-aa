
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-4 border-primary/20 shadow-2xl overflow-hidden">
        {/* Info Card */}
        <div className="bg-white p-10 md:p-14 flex flex-col justify-center border-r border-primary/10">
          <div className="flex flex-col items-center justify-center space-y-4">
             <img 
                src="https://i.imgur.com/3PIVJ9n.jpeg" 
                alt="Logo" 
                className="h-32 w-auto object-contain mix-blend-multiply"
             />
             <div className="text-center mt-6">
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-1">Constructora</p>
                <h4 className="text-2xl font-black text-secondary uppercase tracking-tighter italic leading-none">AA SRL</h4>
             </div>
          </div>
        </div>

        {/* Channels Card */}
        <div className="bg-black p-10 md:p-14 flex flex-col justify-center space-y-10">
          <div className="group cursor-pointer flex justify-center">
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/50670283433" 
                target="_blank" 
                className="w-20 h-20 bg-primary text-white flex items-center justify-center text-4xl group-hover:bg-white group-hover:text-black transition-all duration-300 rounded-full"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Atención Directa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
