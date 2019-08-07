function validateUser(){
    var username =  document.getElementById('email').value;
    var pwd = document.getElementById('password').value;
    if(username.length == 0 && pwd.length == 0){
        document.getElementById('output').innerHTML = 'Please enter the value';
    } else if(username == 'a@a.com' && pwd == '12345'){
        document.getElementById('output').innerHTML = 'valid user';
    } else {
        document.getElementById('output').innerHTML = 'invalid user';
    }
}