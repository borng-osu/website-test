document.body.style.fontFamily = "sans-serif";

let newTable = document.createElement("table");
newTable.style.width = "75%";

for(let i = 0; i < 4; i++) {
    let newRow = document.createElement("tr"); 
    if (i == 0) {
        for(let j = 1; j < 5; j++) {
            let newHead = document.createElement("th");
            newHead.textContent = `Header ${j}`;
            newRow.appendChild(newHead);
        }
    } else {
        for(let k = 1; k < 5; k++) {
            let newCell = document.createElement("td");
            newCell.textContent = `${i}, ${k}`;
            newCell.id = `${i}${k}`;
            newRow.appendChild(newCell);
        }
    }
    newTable.appendChild(newRow);
}

let rowMark = 1;
let colMark = 0;

newTable.style.border = "1px solid black";

let headRow = newTable.children[0].getElementsByTagName("th");
for (let i = 0; i < 4; i++) {
    headRow[i].style.backgroundColor = "lightgray";
    headRow[i].style.padding = "10px";
}

for (let i = 1; i < 4; i++) {
    let cellRow = newTable.children[i].getElementsByTagName("td");
    for (let j = 0; j < 4; j++) {
        cellRow[j].style.padding = "10px";
        cellRow[j].style.alignContent = "center";
    }
}

newTable.children[rowMark].children[colMark].style.border = "3px solid black";

let br = document.createElement("br");

let head = document.createElement("h4");
head.textContent = "Highlight and mark cells using the buttons below:";

let labels = ["up", "down", "left", "right", "mark"];
let buttons = document.createElement("p");

for (let i = 0; i < 5; i++) {
    let clicker = document.createElement("button");
    clicker.textContent = labels[i];
    if (i < 4) {
        clicker.addEventListener("click", function() {
            highlight(clicker.textContent);
        });
    } else {
        clicker.addEventListener("click", function() {
            markCell();
        });
    }
    buttons.appendChild(clicker);
}

document.body.appendChild(newTable);
document.body.appendChild(br);
document.body.appendChild(head);
document.body.appendChild(buttons);

function highlight(text) {

    switch (text) {
        case "up":
            if (rowMark > 1) {
                newTable.children[rowMark].children[colMark].style.border = "0px";
                rowMark--;
                newTable.children[rowMark].children[colMark].style.border = "3px solid black";
            }
            break;
        case "down":
            if (rowMark < 3) {
                newTable.children[rowMark].children[colMark].style.border = "0px";
                rowMark++;
                newTable.children[rowMark].children[colMark].style.border = "3px solid black";
            }
            break;
        case "left":
            if (colMark > 0) {
                newTable.children[rowMark].children[colMark].style.border = "0px";
                colMark--;
                newTable.children[rowMark].children[colMark].style.border = "3px solid black";
            }
            break;
        case "right":
            if (colMark < 3) {
                newTable.children[rowMark].children[colMark].style.border = "0px";
                colMark++;
                newTable.children[rowMark].children[colMark].style.border = "3px solid black";
            }
            break;
    }

    return;
}

function markCell() {
    newTable.children[rowMark].children[colMark].style.backgroundColor = "yellow";
    return;
}