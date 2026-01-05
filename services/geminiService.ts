
import { GoogleGenAI } from "@google/genai";

// Standard initialization as per instructions
const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment. AI features will fail.");
  }
  return new GoogleGenAI({ apiKey: apiKey || "" });
};

export const getProductInsight = async (productName: string, description: string): Promise<string> => {
  try {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a 2-sentence "Style Tip" or "Why it fits you" insight for this product: ${productName}. Description: ${description}. Keep it trendy and appealing to Gen Z / Millennial shoppers.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 100,
      }
    });
    return response.text || "Perfect for your daily rotation and minimalist lifestyle.";
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return "This product is a customer favorite, known for its quality and versatile style.";
  }
};
