var c = console;
window.ShoppingCart = (function(){
    function cartItem(item, price){
        this.item = item;
        this.price = price;
        return{
            Price : price,
            Item : item
        }
    }
    return {
    };
})();