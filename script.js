console.log('greetings world');

let surprise = document.getElementById("surprise");
let list = document.getElementById("list");

let show = () => {
    surprise.innerHTML = "Greetings!";
    console.log('button click works')
}

let number = 6;
let listNum = 1;

for (let i = 0; i <= number; i++) {
    let li = document.createElement('p');
    li.innerHTML = listNum;
    list.appendChild(li);
    listNum++;
}