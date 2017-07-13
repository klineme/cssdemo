var c = console;
window.onload = function(){
    (function(MenuMod){
        (function(CartMod){
            //Get Menu, then display it
            constructMenu(MenuMod.getMenu());
            //setup event listener on the menu
            document.getElementById("MenuCart").addEventListener("click", function(event){
                var clicked = event.target;
                if(clicked.className == "btn-xs AddToCart"){ //If addtocart is clicked
                    //Figure out what was clicked on by parsing internal html text
                    var itemNode = clicked.parentNode.parentNode;
                    //Had to clean up leftover space and endlines
                    var itemArr = (itemNode.innerText.split('\n'))[0].split(" ");
                    var item = itemArr[0] + " " + itemArr[1];

                    var quantityNode = clicked.previousElementSibling;
                    var quantity = parseInt(quantityNode.value);

                    var priceString = clicked.parentNode.innerText;
                    //remove the $ and make it a number
                    var price = parseFloat(priceString.substr(1)).toFixed(2);

                    //Finally add to CartModule
                    CartMod.addItem(item, quantity, price);
                    
                }
                if(clicked.className == "Remove btn-xs btn-danger"){
                    var itemNode = clicked.parentNode.parentNode;
                    //Same as above
                    var itemArr = (itemNode.innerText.split('\n'))[0].split(" ");
                    var item = itemArr[0] + " " + itemArr[1];

                    cleanCartNodes(CartMod.getCart());
                    var index = CartMod.removeDish(item);

                }
                //get cart and display it
                constructCart(CartMod.getCart(), MenuMod.getMax);
                updateTotal(CartMod.calcTotal());

            });

        })(window.ShoppingCart || (window.ShoppingCart = {}));//IIFE
    })(window.Menu || (window.Menu = {}));//IIFE
}
function updateTotal(total){
    totalNode = document.getElementById("Total");
    totalNode.innerText = "CART TOTAL: $" + total.toString();
    totalNode.setAttribute("class", "container cntr");
}

function constructMenu(MenuArray){
    for(i = 0; i < MenuArray.length; i++){
        //A lot of DOM stuff needs to be added
        var inputNode = document.createElement("input");
        inputNode.setAttribute("class", "short input-group-sm");
        inputNode.setAttribute("type", "number");
        inputNode.setAttribute("value", "1");

        var buttonNode = document.createElement("button");
        buttonNode.innerText = "Add to Cart";
        buttonNode.setAttribute("Class", "btn-xs AddToCart");

        var priceNode = document.createElement("div");
        priceNode.innerHTML = "$" + (MenuArray[i].Price).toString() + "<br/>";
        priceNode.appendChild(inputNode);
        priceNode.appendChild(buttonNode);

        var itemNode = document.createElement("div");
        itemNode.innerText = MenuArray[i].Item;
        itemNode.appendChild(priceNode);
        itemNode.setAttribute("class", "col-xs-6");

        var rowIndex = "r" + i.toString();
        var rowNode = document.createElement("div");
        rowNode.appendChild(itemNode);
        rowNode.setAttribute("class", "row DelMe");
        rowNode.setAttribute("id", rowIndex);

        document.getElementById("MenuCart").appendChild(rowNode);
    }
    return;
}
function cleanCartNodes(CartArray){ //Specifically for when I delete nodes
    for(i = 0; i < CartArray.length; i++){
        var doesExist = document.getElementById("cartNode"+i.toString());
        if(doesExist){
            doesExist.parentNode.removeChild(doesExist);
        }
    }    
}

function constructCart(CartArray, max){
    for(i = 0; i < CartArray.length; i++){
        //A lot of DOM stuff needs to be added

        var buttonNode = document.createElement("button");
        buttonNode.innerText = "Remove";
        buttonNode.setAttribute("Class", "Remove btn-xs btn-danger");

        var priceNode = document.createElement("div");
        priceNode.innerHTML = "$" + (CartArray[i].Price).toString() + "<br/>";
        priceNode.appendChild(buttonNode);

        var itemNode = document.createElement("div");
        itemNode.innerText = CartArray[i].Item + " x " + (CartArray[i].Quantity).toString();
        itemNode.appendChild(priceNode);
        itemNode.setAttribute("class", "col-xs-6" );
        itemNode.setAttribute("id", "cartNode"+i.toString());
        //Node cleanup
        var doesExist = document.getElementById("cartNode"+i.toString());
        if(doesExist){
            doesExist.parentNode.removeChild(doesExist);
        }

        var rowIndex = "r" + i.toString();
        var rowNode = document.getElementById(rowIndex);
        rowNode.appendChild(itemNode);
    }
    return;
}