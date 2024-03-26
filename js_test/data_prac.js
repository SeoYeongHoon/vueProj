fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((data) => {
        // console.log(data);
        showList(data);
    })
    .catch(err => console.error(err));

let table = document.createElement('table');
let thead = document.createElement('thead');
// let th = document.createElement('th');
let tr = document.createElement('tr');
let td = document.createElement('td');

function showList(data) {
    console.log(data);
    // let myList = document.querySelector('#list');
    // td.innerHTML = 'abc';
    // myList.appendChild(table).appendChild(thead).appendChild(tr).appendChild(td);
}

showList();