var first  = "hey"

function welcome(){
    first = "hii ";
    return first;
}


function greet(uname){
    var fout = welcome();
    var out = fout+uname;
    return out
}


console.log(first)
console.log(welcome('John'))


var test = function(a,b){
    return a*b
}

function multiply(x){
    return function(y){
        return function(z){
            return x*y*z
        }
    }
}


multiply(2)(3)(4)
multiply(2,3,4)
output:24

function isEven(a){
    var out;
    if(a%2==0){
        out = "even"
    }else{
        out = "odd"
    }
    return out
}


//Es6
const add = (a,b) => { return a+b}
add(1,3)