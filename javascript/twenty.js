document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText="I'm Varun"
"I'm Varun"
document.getElementsByTagName('h1')[0].style.color="green"
"green"

document.getElementsByClassName('scroll')
HTMLCollection(4) [a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[2]
<a href=​"#education" class=​"scroll">​Education​</a>​
document.getElementsByClassName('scroll')[2].innerText
"Education"
document.getElementsByClassName('scroll')[2].innerText="Profile"
"Profile"

document.getElementById('work').style.background="gray"
"gray"