/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var loggedIn = false;

setLoginBtn(loggedIn);

var user = new User('henk', 'piet');
console.log(user);
//console.log(user.password);
//user.password = user.encryptPassword('piet');
console.log(user.decryptPassword(user.password).toString(CryptoJS.enc.Utf8));
//console.log(decrypted.toString(CryptoJS.enc.Utf8));
//alert('wat');

addUserToStorage(user);
console.log(localStorage.user.name);

jQuery(window).load(function () {
    if (!loggedIn) {
    openLoginPage();
}
});


function openLoginPage() {
    $('#loginPageBtn').click();
}
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

function checkIfLoggedIn() {
    if (false)
        return true;
}

////////////////////////////////////////////////////////////////////////////////
//Local storage functions

function addUserToStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

function removeUserFromStorage() {
    localStorage.removeItem("user");
}

function getUserFromStorage() {
    var user = JSON.parse(localStorage.user);
    return user;
}