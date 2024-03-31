import { connectToDatabase } from "./mongodbconnect";

export default async function Subscriber(req, res) {
  try {
    const db = await connectToDatabase();
    const collection = await db.collection('subscriber');

    if (req.method === 'POST') {
      const subscriber_email  = req.body;
      const result = await collection.insertOne({ subscriber_email });
      if(result.acknowledged) res.status(200).json({ success: true,  subscriber_email  });
      else res.status(500).json({ success: false, error: 'Internal Server Error' });
    } else {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
