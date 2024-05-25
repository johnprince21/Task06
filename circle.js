class Circle {
    constructor(radius, color) {
            this.radius = radius;
            this.color = color;
        }
    getColor() { return this.color; }
        setColor(color) { this.color = color; }
        getRadius() { return this.radius; }
        setRadius(radius) { this.radius = radius; }
        tostring() {
            return ('[radius = ' + this.radius + ',color = ' + this.color + ']')
        }
    getArea() {
            return Math.PI * this.radius * this.radius;
        }
        getCircumference() { return 2 * (Math.PI) * this.radius }
    }
    let circ = new Circle(1.0, 'red');
    console.log(circ);
    console.log(circ.getColor());
    console.log(circ.getRadius());
    circ.setColor('blue')
    console.log(circ.getColor())
    circ.setRadius(5.0)
    console.log(circ.getRadius());
    console.log('Circle : ' + circ.tostring());
    console.log(circ.getArea());
    console.log(circ.getCircumference());