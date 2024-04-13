// Import necessary modules
import { connectToDatabase } from './mongodbconnect';
import { NextResponse } from 'next/server';

export default async function POST(req , res) {
  try {
    // Connect to the database
    const db = await connectToDatabase();
    // Access the 'Contact Details' collection
    const collection = db.collection('Contact_Details');
    // Destructure data from the request body
    const { first_name, last_name, company, email, phone_number, message } = req.body;
    console.log("details: " ,first_name, last_name, company, email, phone_number, message)
    // console.log({ first_name, last_name, company, email, phone_number, message });

    // Save data to the 'Contact Details' collection
    const result = await collection.insertOne({
      first_name,
      last_name,
      company,
      email,
      phone_number,
      message,
    });
    // Return a success response
    let msg= "Thanks for getting in touch! We'll be in contact with you shortly."
    console.log("result",result, )
    if(!result.acknowledged){
        return  res.status(200).json({
              success: false,
              error: 'Oops! It seems there was an internal server error while submitting your message. Please try again later.',
            });
            }
    return  res.status(200).json({
      success: true,
      message: {msg}
    });
  } catch (error) {
    console.error(error);
    // Return an error response
    return  res.status(500).json({
      success: false,
      error: 'Oops! It seems there was an internal server error while submitting your message. Please try again later.',
    });
  }
}
