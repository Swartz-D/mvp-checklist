const express = require('express');
const cors = require('cors');
const {Client} = require('pg');
const app = express();
const PORT = 4040;

const config = require('./config.js')[process.env.NODE_ENV||'dev'];

const client = new Client({
	connectionString: config.connectionString
});

client.connect();

app.use(cors());
app.use(express.json());

app
	.route('/api/list')
	.get((req,res)=>{
		client.query('SELECT * FROM check_list')
			.then(result=>{
				//console.log('first', result.rows);
				res.status(200).set('Content-Type', 'application/json').send(result.rows);
			})
			.catch(e => console.error(e.stack));
	})

	.post((req,res)=>{
		let list = req.body;
		let cat = list.cat;
		let task = list.task;
		let details = list.details;
		let howLong = list.allotted_time_min;
		console.log('hi',cat, task, details, howLong);
		console.log('type', typeof at, typeof when);
		client.query(`INSERT INTO check_list (cat, task, details, allotted_time_min)
    VALUES ('${cat}', '${task}', '${details}', ${howLong}) RETURNING *`)
			.then(result=>{
				res.status(200).set('Content-Type', 'application/json').send(result.rows);
			})
			.catch(e => console.error(e.stack));
	});

app
	.route('/api/list/:id')
	.get((req,res)=>{
		client.query(`SELECT * FROM check_list WHERE id = ${req.params.id}`)
			.then(result=>{
				res.status(200).set('Content-Type','application/json').send(result.rows);
			})
			.catch(e => console.error(e.stack));
	})

	.patch((req,res)=>{
		let list = req.body;
		let cat = list.cat;
		let task = list.task;
		let details = list.details;
		let howLong = list.allotted_time_min;
		let listAtt = [];
		if(cat) listAtt.push('cat=\''+ cat+'\'');
		if(task) listAtt.push('task=\''+ task+'\'');
		if(details) listAtt.push('details=\''+ details+'\'');
		if(howLong) listAtt.push('allotted_time_min='+ howLong);
		if(listAtt.length>0){
			let query = `UPDATE check_list SET ${listAtt.toString()} WHERE id = ${req.params.id} RETURNING *`;
			console.log(query);
			client.query(query)
				.then(result =>{
					res.status(200).set('Content-Type','application/json').send(result.rows);
				})
				.catch(e=> console.error(e.stack));
		}
	})

	.delete((req,res)=>{
		client.query(`DELETE FROM check_list WHERE id = ${req.params.id} RETURNING *`)
			.then(result =>{
				res.status(200).set('Content-Type','application/json').send(result.rows);
			})
			.catch(e=> console.error(e.stack));
	});

app.listen(PORT, ()=>{
	console.log(`Listening on port ${PORT}`);
});
