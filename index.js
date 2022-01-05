const { MongoClient } = require('mongodb');
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;
const express = require('express');
const cors = require('cors')
const app =express();
const port = process.env.PORT || 8000;

//midalware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bhafc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {

  try {
    await client.connect();
    const database = client.db("educalCourses");
    const coursesCollection = database.collection("all-courses");
    const eventsCollection = database.collection("all-events");
    

  // GET API ALL courses
        app.get('/all-courses', async (req,res)=>{
          const cursor = coursesCollection.find({})
          const courses = await cursor.toArray();
          res.send(courses);
    
         });
  // GET API ALL events
        app.get('/all-events', async (req,res)=>{
          const cursor = eventsCollection.find({})
          const events = await cursor.toArray();
          res.send(events);
    
         });


  
    


   
  } finally {
   // await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
  res.send('Running the server on educal projects');
})
app.listen(port, () => {
  console.log('Example app listening at',port)
})