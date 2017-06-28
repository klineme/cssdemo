function fizzbuzz(element, number){
    var results = "";
    for(i = 1; i <= number; i++){
        var forb = false;
        if (i%3 == 0) {
            // console_v.log("Fizz");
            results += "Fizz"
            forb = true;
        }
        if(i%5 == 0) {
            // console_v.log("Buzz");
            results += "Buzz";
            forb = true;
        }
        if (!forb){
            // console_v.log(i);
            results += i;  
        }
        results += "<br>";
    }
    element.innerHTML = results;
}





window.onload = function(){
    var c = console;
    var maindiv = document.getElementById("main");
    fizzbuzz(maindiv, 30);
}