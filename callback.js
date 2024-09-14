// const callback =(arg) => {
//   console.log(arg)
//   alert("ehhe7g7d7833e7g")
// }

// const loadScript= (src,callback) => {
//   let sc=document.createElement("script")
//   sc.src=src
//   sc.onload=callback("Sunil")
//   document.head.append(sc)
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js", callback)

console.log('this is promise');

let prom = new Promise((resolve, reject) => {
  let a = Math.random()
  console.log(a);

  if (a < 0.5) {
    reject("No random number is not supported")
  }
  else {
    setTimeout(() => {
      console.log('yes this is a promise');
      resolve("sunil")
    }, 3000);
  }
})

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random()
  console.log(a);

  if (a < 0.5) {
    reject("No random number is not supported 2")
  }
  else {
    setTimeout(() => {
      console.log('yes this is a promise 2 ');
      resolve("sunil 93100")
    }, 4000);
  }
})

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random()
  console.log(a);

  if (a < 0.5) {
    reject("No random number is not supported 3")
  }
  else {
    setTimeout(() => {
      console.log('yes this is a promise 3 ');
      resolve("sunil 9310065542")
    }, 1000);
  }
})

let prom3 = new Promise((resolve, reject) => {
  let a = Math.random()
  console.log(a);

  if (a < 0.5) {
    reject("No random number is not supported 4")
  }
  else {
    setTimeout(() => {
      console.log('yes this is a promise 4 ');
      resolve("sunil baghel")
    }, 10000);
  }
})

let prom4 = new Promise((resolve, reject) => {
  let a = Math.random()
  console.log(a);

  if (a < 0.5) {
    reject("No random number is not supported 5")
  }
  else {
    setTimeout(() => {
      console.log('yes this is a promise 5 ');
      resolve("Hii! everyone")
    }, 8000);
  }
})
let p2 = Promise.allSettled([prom, prom1, prom2, prom3, prom4])
p2.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err)
})

let p3=Promise.any([prom, prom1, prom2, prom3, prom4])
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err)
})

// let p4=Promise.race([prom, prom1, prom2, prom3, prom4])
// p4.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err)
// })