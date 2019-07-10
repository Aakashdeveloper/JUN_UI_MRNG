var city = "london"
city.toUpperCase()

var city = "london"
undefined
city.toUpperCase()
"LONDON"
var city="mUmBai"
undefined
city.toLowerCase()
"mumbai"
city.toLocaleLowerCase()
"mumbai"
var city = "Amsterdam"
undefined
city[0]
"A"
city.length
9
var city = " Amsterdam "
undefined
city.length
11
city.trim()
"Amsterdam"
var news="India loose the match"
undefined
news.replace('India', 'NewZeland')
"NewZeland loose the match"


var a = "i am learning javascript"
undefined
a.split(' ')
(4) ["i", "am", "learning", "javascript"]
var mytxt="https://www.w3schools.com/jsref/jsref_map.asp"
undefined
mytxt.split('/')
(5) ["https:", "", "www.w3schools.com", "jsref", "jsref_map.asp"]
var out = mytxt.split('/')
undefined
out
(5) ["https:", "", "www.w3schools.com", "jsref", "jsref_map.asp"]
out.join('')
"https:www.w3schools.comjsrefjsref_map.asp"
var myname="aakash"
undefined
myname.split('')
(6) ["a", "a", "k", "a", "s", "h"]


var lang = "javascript"
undefined
lang.charAt(0)
"j"
lang.charAt(2)
"v"
lang.slice(1)
"avascript"
lang.slice(2)
"vascript"
lang.slice(2,4)
"va"

var a = "jAVaScriPT"

var a = "jAVaScriPT"
undefined
a.charAt(0).toUpperCase()
"J"
a.slice(1)
"AVaScriPT"
var out1 = a.charAt(0).toUpperCase()
undefined
var out2 = a.slice(1)
undefined
out1
"J"
out2.toLowerCase()
"avascript"

=>>>>  out1+out2.toLowerCase()
"Javascript"

=>>>>>> a.charAt(0).toUpperCase() +  a.slice(1).toLocaleLowerCase()
"Javascript"