var marks = [4,46,4367,2346,568];
var names = ["dsg","g","seyy","egr"]

var a = [346,"4y4","5y%",46,43,true,false,"46","hf",5]

var a = [346,"4y4","5y%",46,43,true,false,"46","hf",5]
undefined
a.length
10
a[0]
346
a[4]
43
a[547]
undefined
a.length
10
a.length-1
9
a[a.length-1]
5

var city = ['London', 'New York', 'Delhi', 'Amsterdam', 'Helsinki']
undefined
city.push('Mumbai')
6
city
(6) ["London", "New York", "Delhi", "Amsterdam", "Helsinki", "Mumbai"]
city.pop()
"Mumbai"
city
(5) ["London", "New York", "Delhi", "Amsterdam", "Helsinki"]
city.pop(3)
"Helsinki"
city.shift()
"London"
city.unshift('Sydeny')
4
city
(4) ["Sydeny", "New York", "Delhi", "Amsterdam"]

city.slice(2,4)
(2) ["Delhi", "Amsterdam"]
city.slice(2,6)
(3) ["Delhi", "Amsterdam", "Helsinki"]
city.slice(2,5)
(3) ["Delhi", "Amsterdam", "Helsinki"]
city.splice(2,0,'Mumbai','Innsburg','venice')
[]
city
(8) ["London", "New York", "Mumbai", "Innsburg", "venice", "Delhi", "Amsterdam", "Helsinki"]
city.splice(2,1,'Hongkong','Macau')
["Mumbai"]
city
(9) ["London", "New York", "Hongkong", "Macau", "Innsburg", "venice", "Delhi", "Amsterdam", "Helsinki"]
city.splice(2,3,'Edingburg')
(3) ["Hongkong", "Macau", "Innsburg"]
city
(7) ["London", "New York", "Edingburg", "venice", "Delhi", "Amsterdam", "Helsinki"]