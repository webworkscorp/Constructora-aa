
import React, { useState } from 'react';

const QuickAppointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mensaje ordenado y profesional
    const message = `*CONSULTA TÉCNICA - CONSTRUCTORA AA SRL*\n\n` +
                    `*Nombre:* ${formData.name}\n` +
                    `*Detalles del proyecto:* ${formData.description}\n\n` +
                    `_Enviado desde el sitio web._`;
    
    const whatsappUrl = `https://wa.me/50670283433?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Resetear formulario sin mostrar mensajes de estado adicionales
    setFormData({ name: '', description: '' });
  };

  return (
    <div className="bg-neutralBg py-32 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-4xl md:text-7xl font-black text-secondary uppercase italic leading-none mb-8 tracking-tighter">
              AGENDAR <br/> <span className="not-italic text-primary">CONSULTA</span>
            </h3>
            <p className="text-xl text-gray-500 font-light italic leading-relaxed mb-6">
              "Inicie su proyecto hoy mismo con una asesoría personalizada y profesional."
            </p>
          </div>

          <div className="bg-white p-10 md:p-16 shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-8">
                <div className="group relative">
                  <label className="block text-[10px] font-black text-secondary uppercase tracking-widest mb-3 opacity-40">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-gray-100 px-0 py-4 text-secondary text-xl focus:outline-none focus:border-primary transition-all font-bold placeholder:text-gray-200"
                    placeholder="Escriba aquí..."
                  />
                </div>
                <div className="group relative">
                  <label className="block text-[10px] font-black text-secondary uppercase tracking-widest mb-3 opacity-40">Descripción del Proyecto</label>
                  <textarea
                    rows={2}
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-gray-100 px-0 py-4 text-secondary text-xl focus:outline-none focus:border-primary transition-all font-bold resize-none placeholder:text-gray-200"
                    placeholder="Describa brevemente lo que necesita..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-6 bg-primary text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-secondary transition-all duration-500 shadow-xl flex items-center justify-center text-center"
              >
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAppointment;
