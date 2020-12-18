'use strict'

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    location: 'Portugal',
    twitter: '@jonasschmedtman',
    friends: ['Michael', 'Peter', 'Steven'],

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        console.log(`${this.firstName} is a ${this.age}-year old ${this.job}, and he ${this.calcAge() >= 18 ? "has" : "has not"} a driver's license.`);
    }
};
console.log(jonas);
console.log(jonas.calcAge());
console.log(jonas.age);

jonas.getSummary();

