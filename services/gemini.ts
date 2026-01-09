
import { GoogleGenAI, Type } from "@google/genai";

export const analyzeTrend = async (trend: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the lead strategist at Decode Ventures, an advisory firm for media, entertainment, and tech. 
      Provide a business growth strategy for the following concept or market trend: "${trend}". 
      Analyze:
      1. Technical commercialization potential.
      2. High-level roadmap for market entry.
      3. Strategic value for IP owners/investors.
      Return the result in JSON format with specific growth metrics.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING },
            growthScore: { type: Type.NUMBER },
            strategicRoadmap: { type: Type.STRING },
            marketRisk: { type: Type.STRING },
            finalTakeaway: { type: Type.STRING }
          },
          required: ["analysis", "growthScore", "strategicRoadmap", "marketRisk", "finalTakeaway"]
        },
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
