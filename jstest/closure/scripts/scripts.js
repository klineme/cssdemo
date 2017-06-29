"use strict";
var c = console;
window.onload = function(){
    var counter = outer();
    c.log(counter.getCount());
    c.log(counter.addToCount(432));
    c.log(counter.getCount());

    var shooty = person("Shooty", "McBowface");

    c.log(shooty.getFullName());
}

function outer(){
    var count = 0;
    return {
        addToCount: function(i) {return count +=i;},
        getCount: function() {return count;}
    }
}

function person(fname, lname){
    return {
        getFullName: function() {return fname + " " + lname;}
    }
}