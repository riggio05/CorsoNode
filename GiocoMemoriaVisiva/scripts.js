let table = document.getElementById("memory");
let s = 10;

let memory = [];
let tableData = [];
let colors =  

table();

function table() {
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