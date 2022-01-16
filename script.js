const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    let block = document.createElement("div");
    block.classList.add("item");
    container.appendChild(block);
}

let divs = document.querySelectorAll(".item");

function changeDiv() {
    this.classList.add("item-hovered");
}

divs.forEach((div) => {
    div.addEventListener("mouseover", changeDiv);
});

const button = document.querySelector("button");

function buttonPrompt() {
    let grid = prompt("How many squares per side?");

    divs.forEach((div) => {
        div.remove();
    });

    for (let i = 0; i < grid * grid; i++) {
        let block = document.createElement("div");
        block.classList.add("item");
        container.appendChild(block);
    }
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
    divs = document.querySelectorAll(".item");
    divs.forEach((div) => {
        div.addEventListener("mouseover", changeDiv);
    });
}
button.addEventListener("click", buttonPrompt);
