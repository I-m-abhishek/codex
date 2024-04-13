import { MongoClient } from 'mongodb';
// const uri = `mongodb+srv://${process.env.Db_user}:${process.env.Db_pass}@cluster0.vs6u1vr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const uri_new="mongodb://localhost:27017";
const uri = `mongodb://abhishekkatiyar2504:V3yraQU19nhJ7fQ7@ac-ve19pwp-shard-00-00.gb2eyaw.mongodb.net:27017,ac-ve19pwp-shard-00-01.gb2eyaw.mongodb.net:27017,ac-ve19pwp-shard-00-02.gb2eyaw.mongodb.net:27017/?ssl=true&replicaSet=atlas-i9d6sj-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
const client = new MongoClient(uri);

export async function connectToDatabase() {
  if (client && client.topology && client.topology.isConnected()) await client.connect();
  return client.db('CodeX');
}
