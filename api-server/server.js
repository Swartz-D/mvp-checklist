const express = require('express');
const cors = require('cors');
const {Client} = require('pg');
const app = express();
const PORT = 4040;

const config = require('./config.js')[process.env.NODE_ENV||"dev"]

const client = new Client({
  connectionString: config.connectionString
});

client.connect();

app.use(cors());
app.use(express.json());

app
  .route('/api/list')

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`)
})
