'use client';
import { addNote } from '@/actions/actions';
import { useFormState } from 'react-dom';
import SubmitButton from './SubmitButton';
import { useRef } from 'react';

const initialState = {
    massage: null,
};
type State = {
    message: string | null;
};
export default function PostNote() {
    const [state, formAction] = useFormState<State, FormData>(
        // @ts-ignore
        addNote,
        initialState
    );
    const ref = useRef<HTMLFormElement>(null);
    return (
        <form
            ref={ref}
            action={(formData: FormData) => {
                ref.current?.reset();
                // @ts-ignore
                return formAction(formData);
            }}
        >
            <label htmlFor=''>title</label>
            <input
                type='text'
                name='title'
            />

            <SubmitButton
                className='bg-white text-green-500 p-2 rounded-md m-2'
                text='add note'
            />
            <p>{JSON.stringify(state?.message)}</p>
        </form>
    );
}
