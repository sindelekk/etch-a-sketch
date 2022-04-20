//Create container
const container = document.getElementById("container");

let cont = prompt("Enter size of the container ", );

makeContainer(cont);
function makeContainer(cont) {
    container.style.setProperty('--grid-cont', cont);
    for (let i = 0; i < (cont * cont); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
  };
};

//Settings (CHOSE YOUR COLOR)
let boxColor = document.querySelectorAll(".grid-item");
let userColor = document.querySelector("#colorpicker").onchange = e => {
    boxColor.forEach(box => box.addEventListener("mouseover", () => {
        box.style.backgroundColor = e.target.value;
    }));
};

// Settings (RAINBOW)
const btnRandom = document.getElementById("random");
btnRandom.addEventListener("click", randomColor);

// Settings (CLEAR)
boxColor = document.querySelectorAll(".grid-item");
const btnClear = document.getElementById("clear");
btnClear.addEventListener("click", () => {
    boxColor.forEach(box => {
        box.style.backgroundColor = "white";
    });    
});

// Settings (DISPLAY SLIDER VALUE)
let slider = document.getElementById("range");
let output = document.getElementById("sliderValue");
output.innerText = slider.value;

slider.oninput = function() {
    output.innerText = this.value;
}

//Functions
//Random color generator
function randomColor(){
    var color = [, "#3C9EE7", "#E7993C", 
        "#E73C99", "#3CE746", "#E7993C"];

    let boxColor = document.querySelectorAll(".grid-item");
    boxColor.forEach(box => box.addEventListener("mouseover",  () => {
                changeColor(box);
            }));

    const changeColor = (box) => {
        box.style.background = color[Math.floor(Math.random() * color.length)];
    };
};
