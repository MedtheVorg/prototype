'use client';
import { useFormStatus } from 'react-dom';

export default function SubmitButton({
    text,
    className,
}: {
    text: string;
    className: string;
}) {
    const { pending } = useFormStatus();
    return (
        <button
            type='submit'
            disabled={pending}
            className={className}
        >
            {pending ? 'Submiting...' : text}
        </button>
    );
}
