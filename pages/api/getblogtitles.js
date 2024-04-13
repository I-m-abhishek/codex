import { connectToDatabase } from './mongodbconnect';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('blogs');
      const titles = await collection.find({}).toArray();
      // res.status(200).json({ success: true, titles });
      console.log("titlessss" , titles)
      res.status(200).json(titles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
