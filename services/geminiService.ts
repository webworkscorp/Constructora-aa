
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export interface ConsultationResponse {
  recommendation: string;
  benefits: string[];
  suggestedMaterials: string[];
}

export const getSmartConsultation = async (
  projectType: string,
  priority: string,
  budgetRange: string,
  extraDetails: string
): Promise<ConsultationResponse | null> => {
  if (!API_KEY) return null;

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Como consultor técnico de Constructora AA SRL (especialistas en diseño, reforma y proyectos llave en mano en Costa Rica), asesora al cliente sobre su proyecto.
      Tipo de proyecto: ${projectType}
      Prioridad del cliente: ${priority}
      Rango de presupuesto aproximado: ${budgetRange}
      Detalles adicionales: ${extraDetails}`,
      config: {
        systemInstruction: "Eres un consultor de Constructora AA SRL. Tu tono es profesional y breve. Te enfocas en la durabilidad y funcionalidad. Ofreces soluciones de construcción y mantenimiento en Costa Rica.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendation: {
              type: Type.STRING,
              description: "Recomendación profesional breve.",
            },
            benefits: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Lista de 3 beneficios técnicos.",
            },
            suggestedMaterials: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Materiales o sistemas sugeridos.",
            },
          },
          required: ["recommendation", "benefits", "suggestedMaterials"],
        },
      },
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("Error in Gemini consultation:", error);
    return null;
  }
};
