const container = document.querySelector(".container");
const header = document.querySelector(".header")
const gridbutton = document.createElement("button");
const gridbox = document.createElement("div");
gridbox.classList = "gridbox"

header.appendChild(gridbutton);
container.appendChild(gridbox);

function gridMaker(num = 1) {
    for (let i = 0; i < num; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList = "gridRow";
        gridbox.append(gridRow)
        for (let i = 0; i < (num); i++) {
            let gridSquares = document.createElement("div");
            gridSquares.classList = "gridSquares"
            gridSquares.setAttribute("style", `width: ${100}%; height: (${100/(num)}%;`)
            gridRow.append(gridSquares)
        }
    }
}




gridbutton.textContent = "Select Dimensions"

gridbutton.addEventListener("mouseover", () => {
    gridbutton.setAttribute("style", "background-color: green;")
})

gridbutton.addEventListener("mouseout", () => {
    gridbutton.setAttribute("style", "background-color: #032ba3;")
})

gridbutton.addEventListener("click", () => {
    const gridRows = document.querySelectorAll(".gridRow")
    gridRows.forEach(element => {
        element.remove()
    })
    let input = parseInt(prompt("Enter dimensions (Ex: 2 for 2x2)"));

    if (input > 100) {
        alert("ALERT! Maximum Limit Reached!")
    }
    
    else {
        gridMaker(input);
        let gridSquare = document.querySelectorAll(".gridSquares")
        gridSquare.forEach(element => element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "black"
        }))
    }
})
