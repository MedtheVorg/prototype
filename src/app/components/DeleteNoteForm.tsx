'use client';
import { deleteNote } from '@/actions/actions';
import { INote } from '@/models/note.model';
import Link from 'next/link';

export default function DeleteNoteForm({ note }: { note: INote }) {
    return (
        <form action={() => deleteNote(note._id!)}>
            <div className='border p-2 m-2 text-white bg-blue-400'>
                {note.title}
            </div>
            <div className='flex gap-4'>
                <button type='submit'>delete</button>
                <Link href={`/notes/${note._id}`}>update</Link>
            </div>
        </form>
    );
}
