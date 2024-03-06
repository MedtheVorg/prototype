import { getNotes } from '@/actions/actions';
import DeleteNoteForm from './DeleteNoteForm';
import Link from 'next/link';

export default async function GetNotes() {
    const notes = await getNotes();

    return (
        <div>
            {notes.length > 0
                ? notes.map((note, idx) => (
                      <div
                          key={idx}
                          className='flex '
                      >
                          <DeleteNoteForm note={note} />
                      </div>
                  ))
                : 'no notes found'}
        </div>
    );
}
