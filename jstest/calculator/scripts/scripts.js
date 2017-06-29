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
        // c.log(btn);
        if(btn == "c"){
            dsp = "";
            left = ""; //left side of op
            op = ""; //operator string buffer
            right = ""; //right side of op
            result = 0;
            done = false;
            display.innerHTML = "0"
            return;
        }
        if(btn == "="){
            if(done) left = result.toString();
            if(left && right){
                var rint = parseInt(right);
                var lint = parseInt(left);
                if(op == "+"){
                    result = lint + rint;
                }
                if(op == "-"){
                    result = lint - rint;
                }
                if(op == "*"){
                    result = lint * rint;
                }
                if(op == "÷"){
                    result = lint / rint;
                }
                dsp += result.toString();
                done = true;
            }
            else{
                op = "";
                return;
            }
        }
        else if(btn == "+" || btn == "-" || btn == "*" || btn == "÷"){
            if(done){
                left = result.toString();
                result = 0;
                done = false;
                right = "";
            }
            if(!left){
                op = "";
                dsp = "";
                return;
            }
            op = btn;
        }
        else{
            if(done){
                dsp = btn;
                left = ""; //left side of op
                op = ""; //operator string buffer
                right = ""; //right side of op
                result = 0;
                done = false;  
            }
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