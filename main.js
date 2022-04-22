
const gridSize = 16

const canvas = document.getElementById("canvas")
canvas.style.cssText = "display: grid; grid-template-columns: repeat(16, 50px); justify-content:center";
canvas.style.height = "100vh"

//16x16 grid of square divs
const rowSize = 16
const colSize = 16

for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
        div = document.createElement("div")
        div.classList.add("hoverCell");
        div.style.cssText = "background: white; border: 1px solid black;"
        canvas.appendChild(div)
    }
}


let canvasSquares = document.querySelectorAll(".hoverCell")

canvasSquares.forEach(function(colorSquare){
    colorSquare.addEventListener("mouseover", () => colorSquare.style.background = "black")
})
