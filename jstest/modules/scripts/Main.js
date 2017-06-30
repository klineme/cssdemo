//Anonymous func
var c = console;
(function(module2){
    c.log("Main module running");
    c.log(module2.publicVar);
    window.onload = function(){
        module2.POSTME(function(data){
            c.log(data);
            document.getElementById("main").innerHTML = data;
        });
    }
})(window.app2 || (window.app2 = {}));//IIFE