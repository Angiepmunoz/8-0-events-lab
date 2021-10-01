// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let currentColor = document.querySelector("#current-color")
console.log(currentColor)
let allColors = document.querySelectorAll("#palette")

for(const color of allColors){
  color.addEventListener('click', (e)=>{
    console.log("CLICKED")
    console.log(currentColor.style.backgroundColor)
    console.log(e.target.style.backgroundColor)
    currentColor.style.backgroundColor = e.target.style.backgroundColor;
  })
}

let cells = document.querySelectorAll('.cell');

for(const cell of cells){
  cell.addEventListener('click',(e)=>{
    e.target.style.backgroundColor = currentColor.style.backgroundColor
  })
}

const button = document.querySelector("button");

button.addEventListener("click", (e)=>{
  for(const cell of cells){
    cell.style.backgroundColor = "white"
  }
})