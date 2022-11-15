const ENV = 'dev';

let ApiUrl = ENV == 'dev' ? 'http://localhost:4040' : 'https://backend-6bbx.onrender.com';
console.log('API:', ApiUrl);

const table = document.querySelector('#table');

fetch(`${ApiUrl}/api/list`)
	.then(res=> res.json())
	.then(data=>{
		for(let i = 0; i<data.length; i++){
			var taskEl = document.createElement('tr');
			taskEl.setAttribute('id',`${data[i].id}`);
			taskEl.innerHTML = (  
				`<td><input type="checkbox"></td>
        <td>${data[i].cat}</td>
        <td>${data[i].task}</td>
        <td>${data[i].details}</td>
        <td>${data[i].allotted_time_min}</td>
        <td>${data[i].date}</td>
        <td>${data[i].time}</td>
        `);
			table.append(taskEl);
		}
		console.log(table);
		console.log(data);
	});

document.getElementById('submit').addEventListener('click', event => {
	event.preventDefault();
	let cat = document.getElementById('cat').value;
	let task = document.getElementById('task').value;
	let details = document.getElementById('details').value;
	let time = parseInt(document.getElementById('time').value);
	let when = document.getElementById('when').value;
	let at = document.getElementById('at').value;
    
	let taskItem = {
		'cat': cat,
		'task': task,
		'details': details,
		'allotted_time_min': time,
		'date': when,
		'time': at
	};
    
	fetch(`${ApiUrl}/api/list`, {
		method: 'POST',
		mode: 'cors',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(taskItem)
	})
		.then(res => res.json())
		.then(() => {
			var taskEl = document.createElement('tr');
			taskEl.innerHTML = (  
				`<td><input type="checkbox"></td>
            <td>${taskItem.cat}</td>
            <td>${taskItem.task}</td>
            <td>${taskItem.details}</td>
            <td>${taskItem.time}</td>
            <td>${taskItem.when}</td>
            <td>${taskItem.at}</td>
            `);
			table.append(taskEl);
		}); 
});



const btn = document.getElementById('new');

btn.addEventListener('click', () => {
	const form = document.getElementById('post');

	if (form.style.display === 'none') {
		// 👇️ this SHOWS the form
		form.style.display = 'block';
	} else {
		// 👇️ this HIDES the form
		form.style.display = 'none';
	}
});

