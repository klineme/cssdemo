'use strict' // Look this up, enforces good practices like staying var
var c = console;

window.onload = function(){
    var bttn = document.getElementById("btnGO");
    var text = document.getElementById("textbox");
    var num = document.getElementById("numbox");

    var listener = function(event){
        c.log(text.value);
    }

    bttn.addEventListener("mousedown", /* need listener func*/ listener);
    bttn.addEventListener("mouseup", function(event){
        var val = num.value;
        c.log(val);
        c.log(typeof val);

        var int = parseInt(val, 16);
        c.log(int);
        c.log(typeof int);
    });    
    text.addEventListener("input", listener);
}