import { MongoClient } from 'mongodb';
const pass= "TvcP9Lkmqr2XzOhw";
const uri = `mongodb+srv://abhishekkatiyar2504:${pass}@cluster0.cpjc4uq.mongodb.net/?retryWrites=true&w=majority`;
const uri_new="mongodb://localhost:27017";

const client = new MongoClient(uri_new, { useNewUrlParser: true, useUnifiedTopology: true });

export async function connectToDatabase() {
  if (client && client.topology && client.topology.isConnected()) await client.connect();
  return client.db('blogging');
}
