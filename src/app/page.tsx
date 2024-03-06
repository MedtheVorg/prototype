import Image from 'next/image';
import GetNotes from './components/GetNotes';
import { Suspense } from 'react';
import PostNote from './components/PostNote';

export default function Home() {
    return (
        <main className='grid grid-cols-4 gap-6 m-2'>
            <div className='bg-blue-300 p-2'>
                <h1 className='text-center mb-2 font-bold uppercase'>
                    Get Notes
                </h1>
                <Suspense fallback={<p>Loading notes...</p>}>
                    <GetNotes />
                </Suspense>
            </div>
            <div className='bg-green-300 p-2'>
                <h1 className='text-center mb-2 font-bold uppercase'>
                    Post Note
                </h1>
                <PostNote />
            </div>
            <div className='bg-orange-300 p-2'>
                <h1 className='text-center mb-2 font-bold uppercase'>
                    Get Notes
                </h1>
                <Suspense fallback={<p>Loading notes...</p>}>
                    <GetNotes />
                </Suspense>
            </div>
            <div className='bg-red-300 p-2'>
                <h1 className='text-center mb-2 font-bold uppercase'>
                    Get Notes
                </h1>
                <Suspense fallback={<p>Loading notes...</p>}>
                    <GetNotes />
                </Suspense>
            </div>
        </main>
    );
}
