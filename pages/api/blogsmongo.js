import { connectToDatabase } from './mongodbconnect';

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const collection = db.collection('blogs');
  const data = await collection.find({}).toArray();

  res.status(200).json({ data });
}
