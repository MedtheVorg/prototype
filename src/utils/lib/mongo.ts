import mongoose from 'mongoose';

export async function connectMongo() {
    try {
        const connectionInstance = await mongoose.connect(
            process.env.MONGO_URL as string
        );
        console.log(
            'Connected to Database',
            connectionInstance.connection.db.databaseName
        );
    } catch (error) {
        throw new Error('failed to establish a connection with the database.');
    }
}
