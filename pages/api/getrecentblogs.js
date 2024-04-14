import { connectToDatabase } from './mongodbconnect';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('blogs');

      // Sort in descending order based on the timestamp and limit to 10
      const recentBlogs = await collection.find({}).sort({ _id: -1 }).limit(10).toArray();

      res.status(200).json(recentBlogs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
