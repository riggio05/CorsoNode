let table = document.getElementById("memory");
let s = 10;

let memory = [];
let tableData = [];
let colors =  [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(100, 100, 100)",
    "rgb(100, 0, 0)",
    "rgb(0, 100, 0)",
    "rgb(0, 0, 100)",
]

table();

function table() {
    for(let i = 0; i < size; ++i) {
        let tr = document.createElement("tr");
        for(let j = 0; j < size; ++j) {
            memory[i] = [];
            tableData[i] = [];
            let td = document.createElement("td");
            td.style.backgroundColor;
            memory[i][j] = "rgb(10, 10, 10)"
            tr.appendChild(td);
        }
        table.appendChild(tr);
    
    }
}

function showMe() {
    for(let i = 0; i < size; ++i) {
        let tr = document.createElement("tr");
        for(let j = 0; j < size; ++j) {
            memory[i] = [];
            tableData[i] = [];
            let td = document.createElement("td");
            td.innerHTML = "AA";
            td.style.backgroundColor = ;
            memory[i][j] = "rgb(10, 10, 10)"
            tr.appendChild(td);
        }
        table.appendChild(tr);
    
    }
}

function click(i, j) {
    console.log(i,j);
}