let boxes = document.querySelector(".ball").children
console.log(boxes)
function getRandomColor() {
    let var1 = Math.ceil(0 + Math.random() * 255)
    let var2 = Math.ceil(0 + Math.random() * 255)
    let var3 = Math.ceil(0 + Math.random() * 255)
    return `rgb(${var1},${var2},${var3})`
}
Array.from(boxes).forEach(e => {
    console.log(e)
    setInterval(() => {
        e.style.backgroundColor=getRandomColor()
        // e.style.color = getRandomColor()
        // e.style.borderColor= getRandomColor()
    }, 1000);
})

let contain = document.querySelector(".ball")
console.log(contain)

setInterval(() => {
    contain.style.boxShadowColor = getRandomColor()
    // boxes.style.backgroundColor=getRandomColor()
}, 500);
