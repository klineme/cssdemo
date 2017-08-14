var c = console;
window.Menu = (function(){
    var lunchMenu = [];
    function foodItem(item, price){
        this.item = item;
        this.price = price;
        return{
            Price : price,
            Item : item
        }
    }
    //createMenu() will choose an ingredient at random, pair it with each dish
    function createMenu(){
        var ingredients = ["Oyster", "Chicken", "Beef", "Blueberry", "Olive", "Strawberry", "Saurkraut", "Pork", "Bacon", "Sausage", "Kale", "Peanut", "Cauliflower", "Broccoli", "Asparagus", "Lamb", "Rice", "Mango", "Portobello", "Tomato", "Turkey", "Cabbage"];
        var dishesLunch = ["Sandwich", "Quesadilla","Salad", "Macaroni", "Dumplings", "Wrap", "Taco", "Soup", "Pizza"];
        for(i = 0; i < dishesLunch.length; i++){
            var newDish = ingredients[Math.floor(Math.random() * ingredients.length)] + " " + dishesLunch[i];
            var newPrice = (Math.ceil((Math.random()*10)+5)).toFixed(2);
            var newFoodItem = new foodItem(newDish, newPrice);
            lunchMenu.push(newFoodItem);
        }
    }
    function getM(){
        var url = "http://localhost/restaurant/api/Menu";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var data = xhr.responseText;

                var obj = JSON.parse(data); //cartItems member is array
                c.log(obj.menuItems);
                lunchMenu = [];
                for(i = 0; i < obj.menuItems.length; i++){
                    var found = false;
                    for(j = 0; j < lunchMenu.length; j++){
                        if(lunchMenu[j].Item == obj.menuItems[i].Item){
                            found = true;
                        }
                    }
                    //Otherwise, if it is not found, push it
                    if(!found)
                        lunchMenu.push(obj.menuItems[i]);
                }

            }
        }
        xhr.open("GET", url, false);
        xhr.send();
        // createMenu();
        return lunchMenu;
    }
    function getmx(){
        return lunchMenu.length;
    }
    return {
        getMenu : getM,
        getMax : getmx
    };
})();