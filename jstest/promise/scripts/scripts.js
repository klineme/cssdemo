"use strict";
var c = console;
window.onload = function(){
    var thepromise = getPromise("HELLO");

    thepromise.then(function(data){
        c.log(data);
    });
    getObject(0).then(function(timer){
        c.log(timer.counter);
        timer.addToCount(1);
        c.log(timer.counter);
        timer.addToCount(2);
        c.log(timer.counter);                    
    });
}

function getPromise(msg){
    var val = new Promise(function(res, rej){
        res(msg+ " promise resolved");
    });
    return val;
}

function getObject(count){
    return new Promise(function(res, rej){
        res({counter: count, addToCount: function(x){this.counter+=x;}})
    });
}