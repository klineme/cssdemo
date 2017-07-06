var c = console;
window.Menu = (function(){
    function foodItem(item, price){
        this.item = item;
        this.price = price;
        return{
            Price : price,
            Item : item
        }
    }
    //createMenu() will choose an ingredient at random, pair it with each dish
    var ingredients = ["Oyster", "Chicken", "Beef", "Blueberry", "Olive", "Strawberry", "Saurkraut", "Pork", "Bacon", "Sausage", "Kale", "Peanut", "Cauliflower", "Broccoli", "Asparagus", "Lamb", "Rice", "Mango", "Porobello", "Tomato", "Turkey", "Cabbage"];
    var dishesLunch = ["Sandwich", "Quesadilla","Salad", "Macaroni", "Dumplings", "Wrap", "Taco", "Soup"];
    var lunchMenu = [];
    for(i = 0; i < dishesLunch.length; i++){
        var newDish = ingredients[Math.floor(Math.random() * ingredients.length)] + " " + dishesLunch[i];
        var newPrice = Math.ceil((Math.random()*10)+5)
        var newFoodItem = new foodItem(newDish, newPrice);
        lunchMenu.push(newFoodItem);
        c.log(newFoodItem);
    }
    function doPost(callback){ // PRIVATE FUNCTION
    }
    return {
    };
})();