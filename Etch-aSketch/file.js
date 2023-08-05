let color = "black";

document.addEventListener("DOMContentLoaded", () => {
createSquare(16);

let sizeButton = document.querySelector('#size');
sizeButton.addEventListener("click", () => {
    let size = getSize();
    createSquare(size);
})
})


const createSquare = (size) =>{
    let board = document.querySelector('.content2');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let divNum = size * size;

    let blackbtn = document.querySelector('#black');
    let randombtn = document.querySelector('#random');
    let resetbtn = document.querySelector('#reset');
    let erasebtn = document.querySelector('#erase');
    let color;

    blackbtn.addEventListener('click', () => {
        color = 'black';
    })

    randombtn.addEventListener('click', () => {
        color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    })

    erasebtn.addEventListener("click", () => {
        color = 'white'; 
    })

    resetbtn.addEventListener("click", () => {
        let divs = document.querySelectorAll('div');
        divs.forEach((div) => div.style.backgroundColor = "white");
    })

    for(let i = 0; i < divNum; i++){
        let div = document.createElement("div");
        board.insertAdjacentElement("beforeend", div);
        div.addEventListener("mousemove" , () => {
            div.style.backgroundColor = `${color}`;
        })
    }
}

const getSize = () => {
    let input = prompt("Enter the desired size of your board");
    if(input == "" || input < 1 || input > 100){
        alert("Please pick a number between 1 and 100")
    }
    return input;
}








