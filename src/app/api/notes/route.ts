import Note from '@/models/note.model';
import { connectMongo } from '@/utils/lib/mongo';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: any) {
    // connect to mongodb on page load
    // I have no idea where I should put this
    await connectMongo();
    const notes = await Note.find().exec();
    return NextResponse.json({ notes: notes });
}

export async function POST(req: NextRequest) {
    // we need to parse the body from readableStream into json data
    const { title } = await req.json();
    console.log('🚀 ~ POST ~ body => title:', title);

    const newNote = Note.create({ title: title });
    return NextResponse.json(
        { message: 'note created', note: newNote },
        { status: 201 }
    );
}
