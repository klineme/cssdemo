"use strict";
var c = console;
window.onload = function(){
    var inputs = document.getElementById("inputs");
    var add = document.getElementById("add");
    var box = document.getElementById("box");
    var todo = document.getElementById("todo");
    //var done = [];
    inputs.addEventListener("click", function(event){
        var clicked = event.target;
        if(clicked.id == "add"){
            if(!box.value) return;
            var newnode = document.createElement("li");
            c.log("<li>" + box.value + "</li><br>");
            newnode.innerHTML = ("<li>" + box.value + "</li><input type='button' value='DELETE ME'>");
            todo.appendChild(newnode);
            box.value = "";
        }
    });
}
