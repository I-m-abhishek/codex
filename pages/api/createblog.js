import { connectToDatabase } from './mongodbconnect';

export default async function handler(req, res) {
const currentDate = new Date();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthAbbreviation = months[currentDate.getMonth()];
const formattedDate1 = `${currentDate.getDate()} ${monthAbbreviation}, ${currentDate.getFullYear()}`;
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(currentDate.getDate()).padStart(2, '0');
const formattedDate2 = `${year}-${month}-${day}`;

  if (req.method === 'POST') {
    try {
      console.log("start");
      const db = await connectToDatabase();
      const collection = db.collection('blogs');
      console.log("start2");
      // Assuming you receive data in the request body
      const { title,  content,
        description,
        categoryTitle,
        authorName,
        authorRole,
        authorImageUrl,titleimgurl } = req.body;
        const date1= formattedDate1;
        const datetime1 = formattedDate2; 
        console.log("start3");
      console.log({ title, content,
        description,
        categoryTitle,
        authorName,
        authorRole,
        authorImageUrl,formattedDate1, formattedDate2,titleimgurl});

      // Save data to the 'blogs' collection
      const result = await collection.insertOne({ title,
        content,
        description,
        categoryTitle,
        authorName,
        authorRole,
        authorImageUrl, date1, datetime1,titleimgurl  });
      
       
      // res.status(201).json({ success: true, data: result.ops[0] });
      res.status(201).json({ success: true  });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
