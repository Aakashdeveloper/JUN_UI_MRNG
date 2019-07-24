(function(a,b){
    out = 1+1
    console.log(out)
}())

IIFE

((){}())

Literal Object
var city = {name:"London", country:"England", Population:7832785}
var city = {name:"London", country:"England", Population:7832785}
undefined
typeof(city)
"object"
city.country
"England"
city.name
"London"
city['name']
"London"
city.majority = "Britsiher"
"Britsiher"
city
{name: "London", country: "England", Population: 7832785, majority: "Britsiher"}
city.name="Scotland"
"Scotland"
city
{name: "Scotland", country: "England", Population: 7832785, majority: "Britsiher"}
delete['country']
true
city
{name: "Scotland", country: "England", Population: 7832785, majority: "Britsiher"}
country
VM427:1 Uncaught ReferenceError: country is not defined
    at <anonymous>:1:1
(anonymous) @ VM427:1
delete city.country
true
city
{name: "Scotland", Population: 7832785, majority: "Britsiher"}
city.country="India"
"India"
city
{name: "Scotland", Population: 7832785, majority: "Britsiher", country: "India"}
city.weather="Cold"
"Cold"
city
{name: "Scotland", Population: 7832785, majority: "Britsiher", country: "India", weather: "Cold"}
city.name
"Scotland"
city.name="Mumbai"
"Mumbai"
city
{name: "Mumbai", Population: 7832785, majority: "Britsiher", country: "India", weather: "Cold"}

var city2={}

var city = [
    {name: "Mumbai", Population: 7832785, majority: "Britsiher", country: "India", weather: "Cold"},
    {name: "Scotland", Population: 7832785, majority: "Britsiher", country: "India", weather: "Cold"},
    {name: "London", country: "England", Population: 7832785, majority: "Britsiher"}
]

city[0].name
"Mumbai"
city[2].name
"London"

constructor Object

var car = new Object();
car.brand="Audi";
car.color="black"


let calc ={
    sum : function(a,b){
        return a+b
    }
}