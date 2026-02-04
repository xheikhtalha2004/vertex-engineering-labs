
import { GoogleGenAI, Chat } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Vertex Lead Engineer", a technical strategist for Vertex Engineering Labs.
Your goal is to help visitors understand how engineering simulation, CAD, and optimization can solve their industrial problems.
Be highly technical, precise, and authoritative. Use terms like FEA, CFD, DFM, Mechatronics, and PDM.

Our Core Offerings:
1. CAD & DFM (Design for Manufacturing)
2. Simulation & Analysis (FEA, CFD, Multiphysics)
3. Prototyping & Mechatronics Integration

If a user shares a technical problem, suggest an engineering workflow (e.g., "We should start with a Modal Analysis in ANSYS to find the resonance frequencies").
Encourage them to book a "Technical Consultation" for deep-dive scoping.
Keep responses professional and formatted with markdown.
`;

export class LuminaArchitect {
  private chat: Chat;

  constructor() {
    this.chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }

  async sendMessage(message: string) {
    try {
      const response = await this.chat.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm currently recalibrating my processing units. Please try again or email our engineering team.";
    }
  }

  async sendMessageStream(message: string, onChunk: (text: string) => void) {
    try {
      const response = await this.chat.sendMessageStream({ message });
      for await (const chunk of response) {
        onChunk(chunk.text || "");
      }
    } catch (error) {
      console.error("Gemini Stream Error:", error);
      onChunk("Error connecting to engineering intelligence.");
    }
  }
}
