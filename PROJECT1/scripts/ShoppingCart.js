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
               // c.log(CartArray[i].Item);
            if(CartArray[i].Item == dish){
                CartArray[i].Quantity += quantity;
                found = true;
            }
        }
        //Otherwise, if it is not found, push it
        if(!found)
            CartArray.push(new cartItem(dish, quantity, price));
    }
    function getCart(){
        return CartArray;
    }
    function removedish(dish){
        c.log(CartArray);
        for(i = 0; i < CartArray.length; i++){
            if(CartArray[i].Item == dish){
                CartArray.splice(i, 1);
                return i; //Returns index so I can remove it from DOM as well
            }
        }
        return -1;

    }
    function calctotal(){
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
        addItem : addItem
    };
})();