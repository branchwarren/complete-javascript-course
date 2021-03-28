'use strict';

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);

ford.accelerate();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.accelerate();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.accelerate();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.accelerate();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.accelerate();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.accelerate();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.accelerate();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.accelerate();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.accelerate();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);

ford.brake();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.brake();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.brake();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.brake();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.brake();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.brake();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
ford.brake();
console.log(`The ${ford.make} is going at ${ford.speedUS} mi/h`);
