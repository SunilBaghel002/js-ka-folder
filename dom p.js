console.log("Hello everyone")
document.querySelector(".container").tagName
let set = document.querySelector(".container").innerHTML
console.log(set)
let sete = document.querySelector(".box").innerHTML="this is a new text <b>write by sunil</b>"
console.log(sete)
let setr = document.querySelector(".container").outerHTML
console.log(setr)
let wtf=document.querySelector(".container").textContent
console.log(wtf)
// let wtfd=document.querySelector(".container").hidden=true //this attribute set display:hidden;
let wtfa=document.querySelector(".container").hasAttribute("style")
console.log(wtfa)
let wtfb=document.querySelector(".container").setAttribute("style","display:inline")
console.log(wtfb)
let wtfc=document.querySelector(".container").getAttribute("style")
console.log(wtfc)
let wtfd=document.querySelector(".container").removeAttribute("style")
console.log(wtfd)
let wtfe=document.querySelector(".container").attributes
console.log(wtfe)
let div= document.createElement("div")//create
div.innerHTML="i am a new div"
div.className="alert"
document.querySelector(".container").append(div)
// document.querySelector(".container").node.append
let wtff=document.querySelector(".container").insertAdjacentHTML("afterend","this is for insert a new html ")
console.log(wtff)
let wtfg=document.querySelector(".container").insertAdjacentHTML("afterbegin","fejhbegfhefveghvehrvfvefbjkrejbfebw4jejefgjergrjgergjrkgbugt2khi344r34tyerhrfg4rghjruguge4uhdbfhegvfou")
let wtfh=document.querySelector(".container").insertAdjacentHTML("beforeend","gkkkkkkkgk'jk")
let wtfi=document.querySelector(".box")
wtfi.remove()
let wtfj=document.querySelector(".container").classList
console.log(wtfj)
let wtfk=document.querySelector(".container").className
console.log(wtfk)
let wtfl=document.querySelector(".container").classList.add("wer")
console.log(wtfl)
document.querySelector(".wer").style.backgroundColor="red"
let wtfv=document.querySelector(".wer").classList.toggle(".wer")
console.log(wtfv)
document.querySelector(".container").classList.toggle(".wer")
document.querySelector(".container").classList.toggle(".wer")