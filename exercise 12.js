let boxes = document.querySelector(".container").children
console.log(boxes)
function getRandomColor() {
    let var1 = Math.ceil(0 + Math.random() * 255)
    let var2 = Math.ceil(0 + Math.random() * 255)
    let var3 = Math.ceil(0 + Math.random() * 255)
    return `rgb(${var1},${var2},${var3})`
}
Array.from(boxes).forEach(e => {
    console.log(e)
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
    // e.style.border= "1px solid getRandomColor()"
})
let contain = document.querySelector(".container")
console.log(contain)
contain.style.backgroundColor = getRandomColor()
