import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

if (!process.env.MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  );
}

export async function connectToDatabase(): Promise<MongoClient> {
  console.log('connecting', process.env.MONGODB_URI);
  const client = new MongoClient(process.env.MONGODB_URI);
  const connectedClient = await client.connect();
  return connectedClient.db(process.env.MONGODB_DB);
}
