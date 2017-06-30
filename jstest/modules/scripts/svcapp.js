var c = console;
window.app2 = (function(){
    var privateVar = "I'm a private variable";
    function doPost(callback){
        var url = "https://jsonplaceholder.typicode.com/posts/";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            c.log(xhr.readyState + " " + xhr.status);
            if(xhr.readyState == 4 && xhr.status == 201){
                var data = xhr.responseText;
                callback(data);
            }
        }
        var sendData = {
            name: "BOB",
            title: "NOT MY TITLE",
            userID: 1
        };
        xhr.open("POST", url, true);
        xhr.send();
    }
    return {
        POSTME: doPost,
        publicVar: privateVar
    };
})();