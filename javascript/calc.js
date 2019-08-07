function calc(operator){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(operator === "add"){
        out = parseInt(a)+parseInt(b)
    }
    if(operator === "sub"){
        out = parseInt(a)-parseInt(b)
    }
   

    document.getElementById('output').innerHTML = out;
}