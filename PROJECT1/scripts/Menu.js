var c = console;
window.Menu = (function(){
    var ingredients = ["Oyster", "Chicken", "Beef", "Blueberry", "Olive", "Strawberry", "Saurkraut", "Pork", "Bacon", "Sausage", "Kale", "Peanut", "Cauliflower", "Broccoli", "Asparagus", "Lamb", "Rice", "Mango", "Porobello", "Tomato", "Turkey", "Cabbage"];
    var dishesLunch = ["Sandwich", "Quesadilla","Salad", "Macaroni", "Dumplings", "Wrap", "Taco", "Soup"];
    var lunchMenu = [];
    for(i = 0; i < 10; i++){
        var newDish = ingredients[Math.floor(Math.random() * ingredients.length)] + " " + dishesLunch[Math.floor(Math.random() * dishesLunch.length)];
        lunchMenu.push(newDish);
        c.log(newDish);
    }
    function doPost(callback){ // PRIVATE FUNCTION
    }
    return {
    };
})();