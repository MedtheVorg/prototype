import mongoose, { Schema, model } from 'mongoose';
export type INote = {
    _id: string;
    title: string;
};

const NoteSchema = new Schema<INote>({
    title: {
        type: String,
    },
});

const Note = mongoose.models.Note || model('Note', NoteSchema);

export default Note;
