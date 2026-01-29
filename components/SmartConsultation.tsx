
import React, { useState } from 'react';
import { getSmartConsultation, ConsultationResponse } from '../services/geminiService';

const SmartConsultation: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConsultationResponse | null>(null);
  const [form, setForm] = useState({
    projectType: 'Construcción Residencial',
    priority: 'Durabilidad y Estructura',
    budgetRange: 'Estándar',
    details: ''
  });

  const handleConsult = async () => {
    setLoading(true);
    const data = await getSmartConsultation(form.projectType, form.priority, form.budgetRange, form.details);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white p-10 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 mt-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-secondary uppercase tracking-widest ml-1 opacity-40">Tipo de Proyecto</label>
            <select
              value={form.projectType}
              onChange={(e) => setForm({...form, projectType: e.target.value})}
              className="w-full p-6 bg-gray-50 border-2 border-transparent text-secondary outline-none focus:border-primary transition-all font-bold text-xs uppercase tracking-widest shadow-inner"
            >
              <option>Construcción Residencial</option>
              <option>Reforma Comercial</option>
              <option>Mantenimiento Industrial</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-secondary uppercase tracking-widest ml-1 opacity-40">Prioridad Técnica</label>
            <select
              value={form.priority}
              onChange={(e) => setForm({...form, priority: e.target.value})}
              className="w-full p-6 bg-gray-50 border-2 border-transparent text-secondary outline-none focus:border-primary transition-all font-bold text-xs uppercase tracking-widest shadow-inner"
            >
              <option>Máxima Durabilidad</option>
              <option>Optimización de Costos</option>
              <option>Diseño Arquitectónico</option>
            </select>
          </div>
        </div>

        <div className="mb-12">
          <label className="text-[10px] font-black text-secondary uppercase tracking-widest ml-1 block mb-2 opacity-40">Cuéntenos su visión</label>
          <textarea
            value={form.details}
            onChange={(e) => setForm({...form, details: e.target.value})}
            className="w-full p-6 bg-gray-50 border-2 border-transparent text-secondary outline-none focus:border-primary transition-all font-bold text-xs uppercase tracking-widest resize-none shadow-inner"
            placeholder="Ej: Deseo construir una vivienda de 180m2 con acabados modernos..."
            rows={4}
          ></textarea>
        </div>

        <button
          onClick={handleConsult}
          disabled={loading}
          className="w-full py-8 bg-secondary text-white font-black uppercase tracking-[0.5em] text-[10px] hover:bg-primary transition-all duration-500 disabled:opacity-50 shadow-2xl flex items-center justify-center space-x-4"
        >
          {loading ? (
            <>
              <i className="fa-solid fa-gear animate-spin"></i>
              <span>Procesando...</span>
            </>
          ) : (
            <>
              <i className="fa-solid fa-microchip"></i>
              <span>Generar Diagnóstico</span>
            </>
          )}
        </button>

        {result && (
          <div className="mt-20 animate-fadeIn bg-neutralBg p-10 md:p-14 border-l-8 border-primary relative">
            <div className="absolute top-8 right-8 text-primary/10">
              <i className="fa-solid fa-quote-right text-6xl"></i>
            </div>
            <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6 flex items-center">
              <span className="w-4 h-[1px] bg-primary mr-3"></span> Informe Constructora AA SRL
            </h4>
            <p className="text-secondary text-2xl font-light italic leading-relaxed mb-12">
              "{result.recommendation}"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-200">
              <div>
                <p className="text-[10px] font-black text-secondary uppercase mb-6 tracking-widest opacity-40">Ventajas:</p>
                <ul className="space-y-4">
                  {result.benefits.map((b, i) => (
                    <li key={i} className="text-xs font-bold text-secondary flex items-start italic group">
                      <i className="fa-solid fa-check text-primary mr-3 mt-1 group-hover:scale-125 transition-transform"></i> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-black text-secondary uppercase mb-6 tracking-widest opacity-40">Sistemas:</p>
                <div className="flex flex-wrap gap-2">
                  {result.suggestedMaterials.map((m, i) => (
                    <span key={i} className="px-4 py-2 bg-white text-secondary text-[10px] font-black uppercase tracking-widest italic border border-gray-100 shadow-sm">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartConsultation;
