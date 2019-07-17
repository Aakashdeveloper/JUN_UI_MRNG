var city = ["London", "New York", "Edingburg", "venice", "Delhi", "Amsterdam", "Helsinki"]
undefined
city.indexOf('Delhi')
4
city.indexOf('Helsinki')
6
city.indexOf('Mumbai')
-1
city.indexOf('Pune')
-1

var city = ["London", "New York", "Edingburg", "venice", "Delhi", "Amsterdam", "Helsinki"]
undefined
var number =[1,2,3,4,5]
undefined
city+number
"London,New York,Edingburg,venice,Delhi,Amsterdam,Helsinki1,2,3,4,5"
city.concat(number)
(12) ["London", "New York", "Edingburg", "venice", "Delhi", "Amsterdam", "Helsinki", 1, 2, 3, 4, 5]
var city = ["London", "New York", "Edingburg", "venice", "Delhi", "Amsterdam", "Helsinki"]
undefined
city.sort()
(7) ["Amsterdam", "Delhi", "Edingburg", "Helsinki", "London", "New York", "venice"]
var out = city.sort()
undefined
out.reverse()
(7) ["venice", "New York", "London", "Helsinki", "Edingburg", "Delhi", "Amsterdam"]
var city = ["London", "New York", "Edingburg", "venice", "Delhi", "Amsterdam", "Helsinki"]
undefined
city.reverse()
(7) ["Helsinki", "Amsterdam", "Delhi", "venice", "Edingburg", "New York", "London"]

var final = ["London", "New York", "Edingburg", "venice", "Delhi", "Amsterdam", "Helsinki", 1, 2, 3, 4, 5]
undefined
final.sort()
(12) [1, 2, 3, 4, 5, "Amsterdam", "Delhi", "Edingburg", "Helsinki", "London", "New York", "venice"]

var inter = ["hi"," i ", " am ", " doing "]
undefined
inter.join()
"hi, i , am , doing "
var out = inter.join().replace(',', '')
undefined
out
"hi i , am , doing "
var inter = ["hi"," i ", " am ", " doing "]
undefined
inter.toString()
"hi, i , am , doing "
var inter = ["hi"," i ", " am ", " doing "]
undefined
inter.lastIndexOf('i')
-1
inter.lastIndexOf(' i ')
1
var inter = ["hi"," i ", " am ", " doing " ,' i ', 'javascrit', ' i ']
undefined
inter.lastIndexOf(' i ')
6