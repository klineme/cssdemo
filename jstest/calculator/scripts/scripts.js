'use strict' // Look this up, enforces good practices like staying var
var c = console;

window.onload = function(){
    var display = document.getElementById("diplsay");
    var buttons = document.getElementById("buttons");

    var dsp = "";
    var left = ""; //left side of op
    var op = ""; //operator string buffer
    var right = ""; //right side of op

    buttons.addEventListener("click",function(event){
        //logic goes here
        var btn = event.target.innerHTML;
        c.log(btn);
        if(btn == "+" /*|| btn == "-"*/){
            if(!left){
                op = "";
                return;
            }
            op = btn;
        }
        else{
            if(op){
                right += btn;
            }
            else{
                left += btn;
            }
        }
        c.log(left);
        c.log(right)
    });
}