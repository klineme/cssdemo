'use strict';
var c = console;

window.onload = function(){
    var url = "http://pokeapi.co/api/v2/pokemon/1";
    var url2 = "http://swapi.co/api/people/1";
    var xhr = new XMLHttpRequest();

    c.log("ReadyState = " + xhr.readyState);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var data = xhr.responseText;
            // c.log(JSON.parse(data));

            var main = document.getElementById("main");
            var obj = JSON.parse(data);

            main.innerHTML = obj.name;
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}
