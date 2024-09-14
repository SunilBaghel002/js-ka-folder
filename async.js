// let a=Math.ceil(Math.random()*100+0)
// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a)
//         }, 1000);

//     })

// }

async function getData() {
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data= await x.json()
    return data
    
}
async function main() {
    

console.log('loading modules');

console.log('Do something else');

console.log('working on it');
console.log('Load data');
let data =await getData()

console.log(data);

console.log('process data');
}

main()

// data.then((v) => {
//     console.log(data);

//     console.log('process data');
// })



