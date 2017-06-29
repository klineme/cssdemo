'use strict' // Look this up, enforces good practices like staying var
var c = console;

window.onload = function(){
    var list = document.getElementById("Useless");
    list.addEventListener("click", /* need listener func*/ function(event){
        c.log(event.target);
    });
}