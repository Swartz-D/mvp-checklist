const ENV = 'production';

let ApiUrl = ENV == 'dev' ? 'http://localhost:4040' : 'https://backend-6bbx.onrender.com';
console.log('API:', ApiUrl);

const container = document.querySelector('#container');

// //======== GET ===========


fetch(`${ApiUrl}/api/list`)
	.then(res=> res.json())
	.then(data=>{
		for(let i = 0; i<data.length; i++){
			var taskCard = document.createElement('div');
			taskCard.innerHTML = (  
				`<input id=${data[i].id} class="box" name="box" type="checkbox">
        <ul><li class="dom">${data[i].cat}</li>
        <li>${data[i].task}</li>
        <li>${data[i].details}</li>
        <li>${data[i].allotted_time_min}</li></ul>
        `);
			container.append(taskCard);
		}
		console.log(container);
		console.log(data);
	});


document.getElementById('submit').addEventListener('click', event => {
	event.preventDefault();
	let cat = document.getElementById('cat').value;
	let task = document.getElementById('task').value;
	let details = document.getElementById('details').value;
	let time = parseInt(document.getElementById('time').value);
	// if(cat) arr.push('cat=\''+ cat+'\'');
	// if(task) arr.push('task=\''+ task+'\'');
	// if(details) arr.push('details=\''+ details+'\'');
	// if(time) arr.push('allotted_time_min='+ time);
		
	let taskItem = {
		'cat': cat,
		'task': task,
		'details': details,
		'allotted_time_min': time
	};
	console.log('hey2', taskItem);
	fetch(`${ApiUrl}/api/list`, {
		method: 'POST',
		mode: 'cors',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(taskItem)
	})
		.then(() => {
			console.log('hey4');
			var taskCard = document.createElement('div');
			taskCard.innerHTML = (  
				`<input class="box" name="box" type="checkbox">
            ${taskItem.cat}
            ${taskItem.task}
            ${taskItem.details}
            ${taskItem.time}
            `);
			container.append(taskCard);
			console.log('hey');
		}); 
	
});

document.getElementById('delete').addEventListener('click', ()=>{
	let checkboxes = document.querySelectorAll('input[name="box"]:checked');
	checkboxes.forEach((checkbox)=>{
		let id = checkbox.id;
		checkbox.parentElement.parentElement.remove();

		fetch(`${ApiUrl}/api/list/${id}`, {
			method: 'DELETE',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
		})
			.then(res=>res.json())
			.then(result => console.log(result));
		//.catch(e => console.error(e.stack));
	});
});

//======= PATCH ============

// let input = 1;

// // fetch(`${ApiUrl}/api/list/`+`${input}`)
// // 	.then(res=> res.json())
// // 	.then(data=>{
// // 		for(let i = 0; i<data.length; i++){
// // 			var taskEl = document.createElement('tr');
// // 			taskEl.setAttribute('id',`${data.id}`);
// // 			taskEl.innerHTML = (  
// // 				`<input type="checkbox">
// //         ${data.cat}
// //         ${data.task}
// //         ${data.details}
// //         ${data.allotted_time_min}
// //         ${data.date}
// //         ${data.time}
// //         `);
// // 			table.append(taskEl);
// // 		}
// // 		console.log(table);
// // 		console.log(data);
// // 	});

// document.getElementById('patch').addEventListener('click', () => {
// 	//event.preventDefault();
// 	let arr = [];
// 	let cat = document.getElementById('cat').value;
// 	let task = document.getElementById('task').value;
// 	let details = document.getElementById('details').value;
// 	let time = parseInt(document.getElementById('time').value);
// 	let when = document.getElementById('when').value;
// 	let at = document.getElementById('at').value;
  
// 	let taskItem = {
// 		'cat': cat,
// 		'task': task,
// 		'details': details,
// 		'allotted_time_min': time,
// 		'date': when,
// 		'time': at
// 	};
    
// 	fetch(`${ApiUrl}/api/list/${input}`, {
// 		method: 'PATCH',
// 		mode: 'cors',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify(taskItem)
// 	})
// 		.then(res => res.json())
// 		.then(() => {
// 			var taskEl = document.createElement('tr');
// 			taskEl.innerHTML = (  
// 				`<input type="radio" id="radio">
//             ${taskItem.cat}
//             ${taskItem.task}
//             ${taskItem.details}
//             ${taskItem.time}
//             ${taskItem.when}
//             ${taskItem.at}
//             `);
// 			table.append(taskEl);
// 		}); 
// });





const newBtn = document.getElementById('new');

newBtn.addEventListener('click', () => {
	const form = document.getElementById('post');

	if (form.style.display === 'none') {
		// 👇️ this SHOWS the form
		form.style.display = 'block';
	} else {
		// 👇️ this HIDES the form
		form.style.display = 'none';
	}
});

// const edit = document.getElementByClassName('.edit');

// edit.addEventListener('click', () => {
// 	const form = document.getElementById('patch1');

// 	if (form.style.display === 'none') {
// 		// 👇️ this SHOWS the form
// 		form.style.display = 'block';
// 	} else {
// 		// 👇️ this HIDES the form
// 		form.style.display = 'none';
// 	}
// });



// function get(){
// 	fetch(`${ApiUrl}/api/list`)
// 		.then(res=> res.json())
// 		.then(data=>{
// 			for(let i = 0; i<data.length; i++){
// 				var taskEl = document.createElement('tr');
// 				taskEl.setAttribute('id',`${data[i].id}`);
// 				taskEl.innerHTML = (  
// 					`<input type="checkbox">
//         ${data[i].cat}
//         ${data[i].task}
//         ${data[i].details}
//         ${data[i].allotted_time_min}
//         ${data[i].date}
//         ${data[i].time}
//         `);
// 				table.append(taskEl);
// 			}
// 			console.log(table);
// 			console.log(data);
// 		});
// }

// function patch(data){
  
// }

// function post(data){

// }

// function delete(data){

// }

// const newBtn = document.querySelector('#new');
// const editBtn = document.querySelector('#edit');
// const deleteBtn = document.querySelector('#delete');
// const randomBtm = document.querySelector('#random');
// const radioBtn = document.querySelector('#raddio');

// const cat = document.getElementById('cat');
// const task = document.getElementById('task');
// const details = document.getElementById('details');
// const time = parseInt(document.getElementById('time'));
// const when = document.getElementById('when');
// const at = document.getElementById('at');

// const table = document.querySelector('#table');

// get();

// post(data, taskItem);

// function get(){
// 	fetch(`${ApiUrl}/api/list`)
// 		.then(res=> res.json())
// 		.then(data=>{
// 			for(let i = 0; i<data.length; i++){
// 				var taskEl = document.createElement('tr');
// 				taskEl.setAttribute('id',`${data[i].id}`);
// 				taskEl.innerHTML = (  
// 					`<input type="checkbox">
//         ${data[i].cat}
//         ${data[i].task}
//         ${data[i].details}
//         ${data[i].allotted_time_min}
//         ${data[i].date}
//         ${data[i].time}
//         `);
// 				table.append(taskEl);
// 			}
// 			console.log(table);
// 			console.log(data);
// 		});
// }

// function createRow(data){
// 	let arr = [];
// 	let catV = cat.value;
// 	let taskV = task.value;
// 	let detailsV = details.value;
// 	let timeV = time.value;
// 	let whenV = when.value;
// 	let atV = at.value;
	
// 	if(catV) arr.push('cat=\''+ cat+'\'');
// 	if(taskV) arr.push('task=\''+ task+'\'');
// 	if(detailsV) arr.push('details=\''+ details+'\'');
// 	if(timeV) arr.push('allotted_time_min='+ time);
// 	if(whenV) arr.push('date=\''+ when+'\'');
// 	if(atV) arr.push('time=\''+at+'\'');
// 	if(arr.length > 0){
// 		let taskItem = arr.toString();
// 		console.log(taskItem);
// 		//{
// 		// 	'cat': cat,
// 		// 	'task': task,
// 		// 	'details': details,
// 		// 	'allotted_time_min': time,
// 		// 	'date': when,
// 		// 	'time': at
// 		// };
// 	}
// }

// function post(data, taskItem){
// 	createRow(data);
// 	fetch(`${ApiUrl}/api/list`, {
// 		method: 'POST',
// 		mode: 'cors',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify(taskItem)
// 	})
// 		.then(res => res.json())
// 		.then(() => {
// 			var taskEl = document.createElement('tr');
// 			taskEl.innerHTML = (  
// 				`<input type="checkbox">
//           ${taskItem.cat}
//           ${taskItem.task}
//           ${taskItem.details}
//           ${taskItem.time}
//           ${taskItem.when}
//           ${taskItem.at}
//           `);
// 			table.append(taskEl);
// 		}); 
// }
