
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the Google GenAI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getInvestmentAnalysis = async (amount: number, userQuery: string) => {
  try {
    // Generate content using the recommended model for text tasks.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is considering an investment of $${amount} into a UFO documentary film called "The Abduction Movie". Question: ${userQuery}`,
      config: {
        systemInstruction: "You are an AI investment analyst for a high-end film production. Provide concise, professional, and persuasive insights about the ROI of documentary film projects, specifically in the trending UAP/UFO niche. Mention market demand and audience engagement potential.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING },
            suggestedROI: { type: Type.STRING },
            marketRisk: { type: Type.STRING },
            strategicAdvantage: { type: Type.STRING }
          },
          required: ["analysis", "suggestedROI", "marketRisk", "strategicAdvantage"]
        }
      },
    });
    
    // Access the .text property directly as it is a getter, not a method.
    const text = response.text;
    if (!text) return null;
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return null;
  }
};
