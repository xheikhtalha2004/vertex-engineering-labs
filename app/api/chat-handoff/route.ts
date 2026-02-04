import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { summary, userName, userEmail } = await request.json();

        const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

        // Format the WhatsApp message
        const message = `Hi! I'm ${userName} (${userEmail}). 

${summary}

Looking forward to working with you!`;

        // Generate wa.me link
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Optional: Store conversation in database for analytics
        // await supabaseAdmin.from('chat_conversations').insert([{
        //   user_name: userName,
        //   user_email: userEmail,
        //   summary,
        //   handoff_method: 'whatsapp'
        // }]);

        return NextResponse.json({
            success: true,
            whatsappLink
        });
    } catch (error) {
        console.error('Handoff error:', error);
        return NextResponse.json(
            { error: 'Failed to create handoff link' },
            { status: 500 }
        );
    }
}
