let button=document.getElementById("btn")
button.addEventListener("click",()=>{
    alert("efuegfgehgfhuvuvhfvhfh")
})
button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="wgdgwedgfegdgdgwvdsvgwv"
})
document.querySelector(".box").addEventListener("click", (e)=>{
    e.stopPropagation()
    alert("you click on a box")
})
document.querySelector(".row").addEventListener("click", (e)=>{
    e.stopPropagation()
    alert("you click on a section")
})
document.querySelector(".container").addEventListener("click", (e)=>{
    alert("teri gaand me mera la**")
})
let b=setInterval(() => {
    button.style.backgroundColor="red"
    // alert("vanshaj tu gaandmara h")
}, 6000);
 let a=setTimeout(() => {
    button.style.backgroundColor="green"
}, 1000);
console.log(a)
console.log(b)
button.addEventListener("mouseover",()=>{
    alert("hhegegcgegvy")
})
button.addEventListener("mouseover",()=>{
    document.querySelector(".container").style.backgroundColor="red"
})
let div=document.querySelector(".went")
div.style.backgroundColor="blue"
div.style.padding="4px"
div.style.width="fit-content"
div.addEventListener("mouseover",()=>{
    // alert("gdhwehdvwedewgyvge")
     document.querySelector(".container").style.backgroundColor="yellow"
     document.querySelector(".box").innerHTML="dyugweydgdyewgydyeydveyfvyevvewycveedgevcvev"
     link.style.display="inline"

})
div.addEventListener("mouseout",()=>{
    link.style.display="none"
})
let link=document.querySelector(".link")
link.style.textDecoration="none"
link.style.backgroundColor="cadetblue"
link.style.padding="4px"
link.style.borderRadius="6px"
link.style.color="black"
link.style.display="none"