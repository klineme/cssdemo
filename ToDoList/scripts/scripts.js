"use strict";
var c = console;
window.onload = function(){
    var inputs = document.getElementById("inputs");
    var add = document.getElementById("add");
    var box = document.getElementById("box");
    var todo = document.getElementById("todo");
    var done = document.getElementById("done");

    inputs.addEventListener("click", function(event){
        var clicked = event.target;
        if(clicked.id == "add"){
            if(!box.value) return;
            var newnode = document.createElement("li");
            newnode.innerHTML = ("<li class='dubclk'>" + box.value + "</li><input class='del' type='button' value='DELETE ME'>");
            todo.appendChild(newnode);
            box.value = "";
        }
    });
    inputs.addEventListener("keyup", function(event){
        event.preventDefault();
        if(event.keyCode == 13){
            if(!box.value) return;
            var newnode = document.createElement("li");
            newnode.innerHTML = ("<li class='dubclk'>" + box.value + "</li><input class='del' type='button' value='DELETE ME'>");
            todo.appendChild(newnode);
            box.value = "";
        }
    });
    todo.addEventListener("dblclick", function(event){
        var clicked = event.target;
        if(clicked.className == "dubclk"){
            var newnode = document.createElement("li");
            newnode.innerHTML = ("<li class='dubclk'>" + clicked.innerHTML + "</li><input class='del' type='button' value='DELETE ME'>");
            done.appendChild(newnode);
            var parent = clicked.parentNode;
            parent.parentNode.removeChild(parent);
        }
    });
    done.addEventListener("dblclick", function(event){
        var clicked = event.target;
        if(clicked.className == "dubclk"){
            var newnode = document.createElement("li");
            newnode.innerHTML = ("<li class='dubclk'>" + clicked.innerHTML + "</li><input class='del' type='button' value='DELETE ME'>");
            todo.appendChild(newnode);
            var parent = clicked.parentNode;
            parent.parentNode.removeChild(parent);
        }
    });
    todo.addEventListener("click", function(event){
        var clicked = event.target;
        if(clicked.className == "del"){
            var parent = clicked.parentNode;
            parent.parentNode.removeChild(parent);
            //if(!box.value) return;
        }
    });
    done.addEventListener("click", function(event){
        var clicked = event.target;
        if(clicked.className == "del"){
            var parent = clicked.parentNode;
            parent.parentNode.removeChild(parent);
            //if(!box.value) return;
        }
    });
}
