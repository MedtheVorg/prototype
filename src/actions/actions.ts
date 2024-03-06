'use server';
import Note, { INote } from '@/models/note.model';
import { revalidatePath } from 'next/cache';
import { ZodError, z } from 'zod';
import { addNoteSchema, validateSchema } from '../app/schema/note.schema';
import { notFound } from 'next/navigation';

const API_URL = 'http://localhost:3000/api/notes';
const PAGE_URL = 'http://localhost:3000/notes';
export async function getNotes(): Promise<INote[]> {
    const response = await fetch(API_URL, {
        cache: 'no-cache',
    });

    const data = await response.json();
    return data.notes;
}

export async function addNote(prevState: any, formData: FormData) {
    try {
        const newNote = Note.create({ title: formData.get('title') });

        revalidatePath('/');
        return { message: 'added new Note' };
    } catch (e) {
        if (e instanceof ZodError) {
            return { message: e.errors[0].message };
        }
        console.log(e);

        return { message: 'failed to create Note ' };
    }
}

export async function deleteNote(noteID: string) {
    try {
        const deletedNote = await Note.findByIdAndDelete({ _id: noteID });
        if (!deletedNote) {
            return notFound();
        }
        revalidatePath('/');
    } catch (error) {}
}
