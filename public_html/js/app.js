/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var loggedIn = false;

setLoginBtn(loggedIn);

var user = new User('henk', 'piet');   
console.log(user);
alert('wat');
function setLoginBtn(loggedIn) {
    if (!loggedIn) {
        setLoginBtnTxt("Login");
    } else {
        setLoginBtnTxt("Logout");
    }
}

function setLoginBtnTxt(text) {
    //alert(text);
    $('#loginOutBtn').text(text);
}

function checkIfLoggedIn(){
    if (false) return true;
}

