
let gridSize = 16


let canvas = document.getElementById("canvas")
canvas.style.cssText = "display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); justify-content:center";
canvas.style.height = "100vh"

//16x16 grid of square divs
const rowSize = gridSize
const colSize = gridSize

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        let square = document.createElement("div")
        square.classList.add("hoverCell");
        square.style.cssText = "background: white; border: 1px solid black;"
        canvas.appendChild(square)
    }
}


let canvasSquares = document.querySelectorAll(".hoverCell")

canvasSquares.forEach(function(colorSquare){
    colorSquare.addEventListener("mouseover", () => colorSquare.style.background = "black")
})


/* for (let i=0; i<canvasSquares; i++) {
    canvasSquares[i].addEventListener("mouseover", () => canvasSquares[i].style.background = "black")
} */


const clearAllBtn = document.getElementById("resetButton")
clearAllBtn.addEventListener("click", newSketchPad)

function newSketchPad (){
    gridSize = prompt("Enter new canvas size")
        if (gridSize  > 100 || gridSize  < 2) {
            prompt("Enter a value between 3 and 99")
        }


}