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
  .get((req,res)=>{
    client.query(`SELECT * FROM check_list`)
    .then(result=>{
      console.log('first', result.rows)
      res.status(200).set('Content-Type', 'application/json').send(result.rows)
    })
    .catch(e => console.error(e.stack))
  })

  .post((req,res)=>{
    let list = req.body;
    let cat = list.cat
    let task = list.task;
    let details = list.details;
    let howLong = list.allotted_time_min;
    let when = list.date_time;
    client.query(`INSERT INTO check_list (cat, task, details, allotted_time_min, date_time)
    VALUES ('${cat}', '${task}', '${details}', ${howLong}, ${when}) RETURNING *`)
    .then(result=>{
      res.status(200).set('Content-Type', 'application/json').send(result.rows)
    })
    .catch(e => console.error(e.stack))
  })

app
  .route('/api/list/:id')
  .get((req,res)=>{
    client.query(`SELECT * FROM check_list WHERE task = ${req.params.id}`)
    .then(result=>{
      res.status(200).set('Content-Type','application/json').send(result.rows)
    })
    .catch(e => console.error(e.stack))
  })

  .patch((req,res)=>{

  })

  .delete((req,res)=>{
    client.query(`DELETE FROM check_list WHERE `)
  })

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`)
})
