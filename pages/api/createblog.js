import { connectToDatabase } from './mongodbconnect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('blogs');
      
      // Assuming you receive data in the request body
      const { title, content, author } = req.body;
      
      console.log({ title, content, author });

      // Save data to the 'blogs' collection
      const result = await collection.insertOne({ title, content, author });
      
       
      // res.status(201).json({ success: true, data: result.ops[0] });
      res.status(201).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
