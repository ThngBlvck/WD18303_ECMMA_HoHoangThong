class Shape {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    move() {
        console.log("x là: " + this.x, ",y là: " + this.y);
    }
}
a = new Shape(3,6)
a.move()