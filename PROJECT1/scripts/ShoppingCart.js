var c = console;
window.ShoppingCart = (function(){
    var CartArray = [];
    //Price used to calculate total cost
    function cartItem(item, quantity, price){
        this.item = item;
        this.price = price;
        this.quantity = quantity;

        return{
            Price : price,
            Item : item,
            Quantity : quantity
        }
    }
    function addItem(dish, quantity, price){
        //If item is already in cart, add specified quantity to cart
        var found = false;
        for(i = 0; i < CartArray.length; i++){
            if(CartArray[i].Item == dish){
                CartArray[i].Quantity += quantity;
                found = true;
            }
        }
        //Otherwise, if it is not found, push it
        if(!found)
            CartArray.push(new cartItem(dish, quantity, price));
    }
    function getCart(){ //Getter for the array
        return CartArray;
    }
    function getWebCart(){ //Getter for the object from web api
        var url = "http://localhost/restaurant/api/Cart";
        var xhr2 = new XMLHttpRequest();
        xhr2.onreadystatechange = function(){
            if(xhr2.readyState == 4 && xhr2.status == 200){
                var data = xhr2.responseText;

                var obj = JSON.parse(data); //cartItems member is array
                c.log(obj);
                CartArray = [];
                for(i = 0; i < obj.cartItems.length; i++){
                    var found = false;
                    for(j = 0; j < CartArray.length; j++){
                        if(CartArray[j].Item == obj.cartItems[i].Item){
                            CartArray[j].Quantity += obj.cartItems[i].Quantity;
                            found = true;
                        }
                    }
                    //Otherwise, if it is not found, push it
                    if(!found)
                        CartArray.push(obj.cartItems[i]);
                }
                c.log(CartArray);

            }
        }
        xhr2.open("GET", url, false);
        xhr2.send();

        return CartArray;
    }
    function removedish(dish){ //Searches for dish to remove
        for(i = 0; i < CartArray.length; i++){
            if(CartArray[i].Item == dish){
                CartArray.splice(i, 1);
                return i; //Returns index so I can remove it from DOM as well
            }
        }
        return -1;

    }
    function calctotal(){ // Calculates total amount
        var total = 0;
        if (CartArray.length == 0)
            return total.toFixed(2);
        for(i = 0; i < CartArray.length; i++){
            total += CartArray[i].Quantity * CartArray[i].Price;
        }
        return total.toFixed(2);
    }
    return {
        removeDish : removedish,
        calcTotal : calctotal,
        getCart : getCart,
        getWebCart: getWebCart,
        addItem : addItem
    };
})();