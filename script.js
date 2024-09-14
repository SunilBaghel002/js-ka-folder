console.log("Sunil")
let boxes = document.getElementsByClassName("box")
console.log(boxes)
boxes[3].style.backgroundColor = "red"
document.getElementById("wtf").style.backgroundColor = "green"
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor ="blue"
})
boxes[3].style.backgroundColor = "red"
document.getElementById("wtf").style.backgroundColor = "green"
document.getElementsByTagName("div")
let nav = document.querySelector(".navbar")
console.log(nav)
nav.style.backgroundColor = "red"
nav.firstElementChild.style.color = "white"
// nav.firstChild.style.backgroundColor = "white"
let dot = document.querySelector(".dot")
dot.firstElementChild.style.backgroundColor="green"
dot.children[2].style.backgroundColor="green"
document.querySelector(".row").style.border="5px solid white";

let you = document.getElementsByTagName("ul")
you.firstElementChild.style.color="cyan"
