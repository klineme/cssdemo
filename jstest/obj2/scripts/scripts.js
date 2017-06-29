"use strict";
var c = console;
window.onload = function(){
    var rect = new Rectangle(2, 38920);

    c.log(rect.Area());
}

function shape(height, width){
    this.height = height;
    this.width = width;
}

function Rectangle(height, width){
    shape.call(this, height, width);

    this.Area = function(){
        return this.height * this.width;
    }
}