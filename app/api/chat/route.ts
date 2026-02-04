import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const apiKey = process.env.GOOGLE_AI_STUDIO_API_KEY;

        if (!apiKey) {
            console.error('GOOGLE_AI_STUDIO_API_KEY is not set');
            return NextResponse.json(
                { error: 'API configuration error. Please contact support.' },
                { status: 500 }
            );
        }

        const { message, conversationHistory } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        console.log('Processing chat request:', message);

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' });

        // Build conversation context
        const context = `You are the Vertex Engineering Architect AI for Vertex Engineering Labs.

COMPANY CONTACT (Use these EXACT details):
- Phone/WhatsApp: +92 313 5229867
- Email: xheikhtalha.yasin2004@gmail.com
- Services: CAD Design, CFD/FEA Simulation, Rapid Prototyping, Mechatronics

CRITICAL RESPONSE RULES:
1. Keep responses VERY SHORT (2-4 sentences max)
2. Use bullet points • when listing multiple items
3. NO lengthy paragraphs - be concise and strategic
4. If user mentions "whatsapp", "contact", "call", or "talk" → IMMEDIATELY provide:
   "📱 WhatsApp: +92 313 5229867
   Click to connect: https://wa.me/923135229867"
5. After providing info, ask ONE brief qualifying question
6. Be professional but friendly

Previous chat:
${conversationHistory?.map((msg: any) => `${msg.role}: ${msg.content}`).join('\n') || 'None'}

User: ${message}

Reply concisely:`;

        console.log('Sending to Gemini...');
        const result = await model.generateContent(context);
        const response = await result.response;
        const text = response.text();
        console.log('Response received from Gemini');

        return NextResponse.json({ response: text });
    } catch (error: any) {
        console.error('=== Chat API Error ===');
        console.error('Error message:', error.message);
        console.error('Error name:', error.name);
        console.error('Full error:', JSON.stringify(error, null, 2));

        return NextResponse.json(
            { error: `Chat error: ${error.message}. Please try again.` },
            { status: 500 }
        );
    }
}
