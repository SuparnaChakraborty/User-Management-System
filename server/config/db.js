import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://abhinav:4555@cluster0.b7go4dk.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://riya:suparna_1256@cluster0.28snkbf.mongodb.net/?retryWrites=true&w=majority";






const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();

    // database and collection code goes here
    const db = client.db("test");
    const coll = db.collection("customers");

    // find code goes here
    const cursor = coll.find();
    // iterate code goes here
    await cursor.forEach(console.log);

    // insert docs 
    // const result = await coll.insertOne(docs);
    // console.log('Inserted 1 data');

    // delete docs 
    // const deldata = await coll.deleteOne({handle : '@royyy'});
    // console.log('Deleted 1 data');

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);