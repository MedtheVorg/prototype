import { Schema, z } from 'zod';

export const addNoteSchema = z.object({
    title: z.string().min(1, 'title is required'),
});

export const validateSchema = (schema: Schema, input: any) =>
    schema.parse(input);
