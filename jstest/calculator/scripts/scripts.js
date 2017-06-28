'use strict' // Look this up, enforces good practices like staying var
var c = console;

window.onload = function(){
    var display = document.getElementById("display");
    var buttons = document.getElementById("buttons");

    var dsp = "";
    var left = ""; //left side of op
    var op = ""; //operator string buffer
    var right = ""; //right side of op
    var result = 0;
    var done = false;

    buttons.addEventListener("click",function(event){
        //logic goes here
        var btn = event.target.innerHTML;
        //c.log(btn);
        if(btn.length > 1) return;
        else dsp += btn;
        if(btn == "="){
            if(left && right){
                var rint = parseInt(right);
                var lint = parseInt(left);
                result = lint + rint;
                dsp += result.toString();
                done = true;
            }
            else{
                op = "";
                return;
            }
        }
        else if(btn == "+" /*|| btn == "-"*/){
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
        display.innerHTML = dsp;
        // c.log(left);
        // c.log(right);
    });
}