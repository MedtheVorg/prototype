import mongoose from 'mongoose';
import { redirect } from 'next/navigation';

export default function NotePage({ params }: { params: { id: string } }) {
    console.log('🚀 ~ NotePage ~ params:', params);
    if (!mongoose.isValidObjectId(params.id)) {
        redirect('/');
    }
    return <div>NotePage id {params.id}</div>;
}
