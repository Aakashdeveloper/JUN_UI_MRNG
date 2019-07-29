var bob = new Object();
bob.age = 18;
bob.color = "white";
bob.setAge = function(newAge){
    bob.age = newAge
}

var tony = new Object();
tony.age = 18;
tony.color = "white";
tony.setAge = function(newAge){
    tony.age = newAge
}

let createAge = function(newAge){
    this.age = newAge
}

var tony = new Object();
tony.age = 18;
tony.color = "white";
tony.setAge = createAge

var bob = new Object();
bob.age = 18;
bob.color = "white";
bob.setAge = createAge




let customer = {
    name: 'Gimmy',
    lname:'jack',
    id:80880,
    fullName: function(){
        return this.name+ " "+this.lname;
    }
}


function database(){
    this.add = function(a,b){ return a+b }
    this.sub = function(a,b){ return a-b }
    this.mul = function(a,b){ return a*b }
    this.inset = function(table,name){
        let query = `Select * form ${table} where name = ${name}`
        return query
    }
}

var db = new database()
undefined
db.inset('student', 'john')
"Select * form student where name = john"

var sum = new database()

// Call & apply

var city1 = {
    description: function(){
        return this.cityName + "is a city of "+this.country
    }
}

var inputp = {
    cityName:"London",
    country: 'England'
}

city1.description.call(inputp)


var city1 = {
    description: function(place1,place2){
        return this.cityName + "is a city of "+this.country +" "+place1+ " "+place2
    }
}

var inputp = {
    cityName:"London",
    country: 'England'
}

var places = ['London Eye', 'Clock Tower','Clock Tower1']

city1.description.apply(inputp, places)