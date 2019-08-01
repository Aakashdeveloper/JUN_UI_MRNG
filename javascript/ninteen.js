function robot(name){
    this.name = name;
    this.legs = 2;
    this.color = 'white'
}

var pepper = new robot('Pepper')

function human(name){
    this.name =name;
    this.hands =2
}

human.prototype = new robot();

var john = new human('John')