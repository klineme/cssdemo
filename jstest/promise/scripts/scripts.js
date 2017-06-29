"use strict";
var c = console;
window.onload = function(){
    var thepromise = getPromise("HELLO");

    thepromise.then(function(data){
        c.log(data);
    })
}

function getPromise(msg){
    var val = new Promise(function(res, rej){
        res(msg+ " promise resolved");
    });
    return val;
}