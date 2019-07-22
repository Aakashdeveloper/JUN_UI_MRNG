var a =10
console.log(a)
//setTimeout(()=> {console.log(a+1)}, 1000)
let mytimer = setInterval(()=> {console.log(a+1)}, 1000)
clearInterval(mytimer)
