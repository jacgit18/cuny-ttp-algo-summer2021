class Car {
    constructor(color, speed) {
      this._speed = speed;
      this._color = color;
    }
  }


  class BMW extends Car {
    constructor(color, speed, make) {
      super(color, speed);
      this._make = make;
    }
  
    showInfo() {
      console.log(
        "I’m " +
          this._make +
          ", my color is " +
          this._color +
          ", and my speed is " +
          this._speed
      );
    }
  }
  
  class Toyota extends Car {
    constructor(color, speed, make) {
      super(color, speed);
      this._make = make;
    }
  
    showInfo() {
      console.log(
        "I’m " +
          this._make +
          ", my color is " +
          this._color +
          ", and my speed is " +
          this._speed
      );
    }
  }
  
  class Bentely extends Car {
    constructor(color, speed, make) {
      super(color, speed);
      this._make = make;
    }
  
    showInfo() {
      console.log(
        "I’m " +
          this._make +
          ", my color is " +
          this._color +
          ", and my speed is " +
          this._speed
      );
    }
  }


  var myBentely = new Bentely('Red', '20mph', 'Bentely');
var myBMW = new BMW('Green', '40mph', 'BMW');
var myToyota = new Toyota('White', '60mph', 'Toyota');
console.log(myBentely.showInfo()); 
console.log(myBMW.showInfo());  
console.log(myToyota.showInfo());