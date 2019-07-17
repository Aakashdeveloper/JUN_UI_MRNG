switch(10*10){
    case 100:
        console.log('added')
        break;
    case "1010":
        console.log('concat')
        break;
    default:
        console.log('invalid output')
        break;

}

new Date()
Mon Jul 15 2019 17:50:59 GMT+0100 (British Summer Time)
var mydate = new Date()
undefined
mydate.getDay()
1
mydate.getDate()
15
mydate.getMonth()
6

switch(new Date().getDay()){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 5:
        console.log('Friday')
        break;
}