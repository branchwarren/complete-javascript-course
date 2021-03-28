'use strict';

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
    // console.log(
    //   `Created ${this.make} car with initial speed of ${this.speed} km/h`
    // );
  }

  accelerate() {
    this.speed += 10;
    console.log(`The car ${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`The car ${this.make} is slowing down at ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
    console.log(
      `Created ${this.make} EV car with initial speed of ${
        this.speed
      } km/h and initial charge of ${this.#charge}`
    );
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} charged at ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const car1 = new EVCl('Rivian', 120, 23);
car1.accelerate().accelerate().brake().chargeBattery(10);
