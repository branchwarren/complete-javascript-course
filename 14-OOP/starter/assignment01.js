'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  console.log(this.make, this.speed);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();

car2.accelerate();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
