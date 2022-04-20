console.log('hello world');

let surprise = document.getElementById("surprise");
let list = document.getElementById("list");

let show = () => {
    surprise.innerHTML = "Surprise!";
    console.log('button click works')
}

let number = 5;
let listNum = 1;

for (let i = 0; i <= number; i++) {
    let li = document.createElement('li');
    li.innerHTML = listNum;
    list.appendChild(li);
    listNum++;
}