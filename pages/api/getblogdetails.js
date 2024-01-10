import { connectToDatabase } from './mongodbconnect';
const { ObjectId } = require('mongodb');
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const id = req.query;
    //   console.log(id);
      const objectId = new ObjectId(id);
      const collection = db.collection('blogs');
      const blogdetails = await collection.findOne({ _id : objectId});
    //   console.log(blogdetails);
  
      res.status(200).json(blogdetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
