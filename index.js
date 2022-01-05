const { MongoClient } = require('mongodb');
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;
const express = require('express');
const cors = require('cors')
const app =express();
const port = process.env.PORT || 8000;

app.get('/',(req,res)=>{
  res.send('Running the server on educal projects');
})
app.listen(port, () => {
  console.log('Example app listening at',port)
})