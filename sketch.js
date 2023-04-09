document.addEventListener("DOMContentLoaded", function(){
    
    console.log('hi')
})

function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size + size;

    for(let i = 0; 1 < numDivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertedAdjacentElement("beforeend", div);
    }
}