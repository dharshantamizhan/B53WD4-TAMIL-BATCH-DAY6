class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    toString() {
      return `Circle - Radius: ${this.radius}, Color: ${this.color}`;
    }
  }
  

  const myCircle = new Circle(5, "blue");
  
  console.log(myCircle.toString());

  myCircle.setRadius(7);
  myCircle.setColor("red");
  
  console.log(myCircle.toString()); 
  