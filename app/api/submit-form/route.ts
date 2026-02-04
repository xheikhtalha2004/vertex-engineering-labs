import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';

export async function POST(request: NextRequest) {
    try {
        const { firstName, lastName, email, message } = await request.json();

        // Validate inputs
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Insert into Supabase
        const { data, error } = await supabaseAdmin
            .from('form_submissions')
            .insert([
                {
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    message,
                    status: 'new',
                },
            ])
            .select()
            .single();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json(
                { error: 'Failed to submit form' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Submit form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
