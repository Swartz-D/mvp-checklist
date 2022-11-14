const ENV = "dev";

let ApiUrl = ENV == 'dev' ? 'http://localhost:4040' : 'https://api';
console.log('API:', ApiUrl);

const table = document.querySelector('#table');

fetch(`${ApiUrl}/api/list`)
  .then(res=> res.json())
  .then(data=>{
    for(let i = 0; i<data.length; i++){
      var taskEl = document.createElement('tr')
      taskEl.innerHTML = (
      `<th><input type="checkbox"></th>
        <td>${data[i].cat}</td>
        <td>${data[i].task}</td>
        <td>${data[i].details}</td>
        <td>${data[i].allotted_time_min}</td>
        <td>${data[i].date_time}</td>` 
      )
        table.append(taskEl)
    }
    console.log(table)
    })
    // data.forEach(taskItem =>{
    //   var taskEl = document.createElement('tr')
    //   taskEl.innerHTML = (
    //   `<th><input type="checkbox"></th>
    //     <td>'${data.cat}'</td>
    //     <td>'${data.task}'</td>
    //     <td>'${data.details}'</td>
    //     <td>'${data.allotted_time_min}'</td>
    //     <td>'${data.date_time}'</td>` 
    //   )
  //     console.log('task',taskEl)
  //     console.log(data)
  //   })
  // });

  // var submit = document.getElementById('new').addEventListener("click", event => {
  //   let cat = document.getElementById("cat").value;
  //   let task = document.getElementById("task").value;
  //   let details = document.getElementById("details").value;
  //   let time = document.getElementById("time").value;
  //   let when = document.getElementById("when").value;
    
  //   let taskItem = {
  //       cat,
  //       task,
  //       details,
  //       time,
  //       when
  //   }
    
//     fetch(`${ApiUrl}/api/list`, {
//         method: 'POST',
//         mode: "cors",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(taskItem)
//     })
//     .then(response => {
//         if(response.status == 201){
//             var taskEl = document.createElement('tr');
//             taskEl.innerHTML = `${student.first_name} - age ${student.age}`;
//             classList.appendChild(taskEl);
//         }else {
//             alert("something went HORRIBLY WRONG!!!", response);
//         }
//     })
//     .catch(error => console.error(error));

//})
