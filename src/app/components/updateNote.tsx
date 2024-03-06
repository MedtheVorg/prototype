'use client';
import { useFormState } from 'react-dom';
import SubmitButton from './SubmitButton';

const initialState = {
    massage: null,
};
type State = {
    message: string | null;
};
export default function UpdateNote() {
    const [state, formAction] = useFormState<State, FormData>(
        // @ts-ignore
        (prevState: any, formData: FormData) => {},
        initialState
    );
    return (
        <div>
            <form action={formAction}>
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
        </div>
    );
}
