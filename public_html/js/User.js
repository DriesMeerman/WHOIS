/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function User(username, password) {
    this.username = username;
    this.password = password;
    addFunctions(this);
}

function addFunctions(password) {
    //User.prototype.encryptPassword = encryptPassword(password);
    User.prototype.decryptPassword = function (encrypted) {
        var decrypted = CryptoJS.AES.decrypt(encrypted, "ManManMan");
        return decrypted;
    }
    User.prototype.decryptPasswordToString = function (encrypted) {
        var decrypted = CryptoJS.AES.decrypt(encrypted, "ManManMan");
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

}

function encryptPassword(password) {
    var encrypted = CryptoJS.AES.encrypt(password, "ManManMan");

    //var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
    return encrypted;
}

function decryptPassword(encrypted) {
    var decrypted = CryptoJS.AES.decrypt(encrypted, "ManManMan");
    return encrypted;
}