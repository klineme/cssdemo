"use strict";
var c = console;
window.onload = function(){
    runCallback(callback);
}

var callback = function(msg){
    c.log(msg);
}

function runCallback(cb){
    cb("test")
}