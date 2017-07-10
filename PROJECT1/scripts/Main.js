//Anonymous func
var c = console;
window.onload = function(){
    (function(ModMenu){
        var M = ModMenu.getMenu();
        c.log(M);
        //IT RUNS
    })(window.Menu || (window.Menu = {}));//IIFE

    (function(Cart){
        //DO WHATEVER HERE
    })(window.ShoppingCart || (window.ShoppingCart = {}));//IIFE
}