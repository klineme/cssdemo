"use strict";
var c = console;
window.onload = function(){
    function shape(type, height, width){
        this.type = type;
        this.height = height;
        this.width = width;
    }

    var rectangle = new shape("rectangle", 2, 4);
    shape.prototype.area = function(){
        return this.height * this.width;
    }

    var triangle = new shape("triangle", 1, 3)
    var trapezoid = new shape("trapezoid", 4, 5)

    c.log(rectangle.area());
    c.log(triangle.area());
    String.prototype.prefix = function(msg){
        return msg + " " + this;
    }
    c.log("world".prefix("hello"));
}