/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Main
var loggedIn = checkIfLoggedIn();
console.log(loggedIn);

$(document).ready(function () {
    $('#searchbar').keydown(function (event) {
        if (event.keyCode == 13) {
            search_api();
            return false;
        }
    });
});
//var user = new User('henk', 'piet');
//console.log(user);
//console.log(user.password);
//user.password = user.encryptPassword('piet');
//console.log(user.decryptPassword(user.password).toString(CryptoJS.enc.Utf8));
//console.log(decrypted.toString(CryptoJS.enc.Utf8));
//alert('wat');
//addUserToStorage(user);
//console.log(localStorage.user.name);

//End Main

jQuery(window).load(function () {
    if (loggedIn) {
//    $('#loginPageBtn').click();
        $.mobile.changePage("#two");
    }
});


function getJSON(url) {
        $.getJSON( url, function( data ) {
//console.log(data);
        addJsonToPage(data);
return data; 
})};

function search_api() {
    var domain_url_part = "https://www.whoisxmlapi.com/whoisserver/WhoisService?domainName=";
    var search_domain = $('#searchbar').val() + "";
    var domain_parameters = parameterStringBuilder();//"&username=xxxxx&password=xxxxx&outputFormat=JSON";

    var json_url = domain_url_part+search_domain+domain_parameters;
    console.log(json_url);
    
    if (search_domain.indexOf(".") == -1) {
        alert("no top level domain given");
    } else {
        getJSON(json_url);
    }
}

function addJsonToPage(json){
    document.getElementById('whoisData').innerHTML = JSON.stringify(json.WhoisRecord, null, '\t');
}

function parameterStringBuilder() {
    var user = getUserFromStorage();
    return "&username=" + user.username + "&password=" + user.password + "&outputFormat=JSON&callback=?";
}

function saveUser() {
    var user = new User($('#username').val(), $('#password').val());
    addUserToStorage(user);
}

function openLoginPage() {
    $.mobile.changePage("#three");
}

function checkIfLoggedIn() {
    if (localStorage.loggedIn != null) {
        return true;
    }
    return false;
}

////////////////////////////////////////////////////////////////////////////////
//Local storage functions

function addUserToStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loggedIn", true);
}

function removeUserFromStorage() {
    localStorage.removeItem("user");
    localStorage.removeItem("loggedIn");
}

function getUserFromStorage() {
    var user = JSON.parse(localStorage.user);
    return user;
}

