class Uber {
    constructor(baseFare, distance, time) {
      this.baseFare = baseFare;
      this.distance = distance;
      this.time = time;
    }
  
    calculatePrice(distance, time) {
      const fare = this.baseFare + (distance * this.distance) + (time * this.time);
      return fare;
    }
  }
    
  const calculator = new Uber(5, 1.5, 0.2); 

  const distance = 10; 
  const time = 20;
  
  const price = calculator.calculatePrice(distance, time);
  console.log(`total cost of travels price is ${price}`);
  