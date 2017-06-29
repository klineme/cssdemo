var c = console;
window.onload = function(){
    function shape(type, height, width){
        this.type = type;
        this.height = height;
        this.width = width;
    }
    var rectangle = new shape("rectangle", 2, 4);
    var triangle = new shape("triangle", 1, 3)
    var trapezoid = new shape("trapezoid", 4, 5)

    c.log(rectangle);
}