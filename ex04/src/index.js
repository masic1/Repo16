// Only change code below this line
class Pets {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }

    walk(numberOfLegs) {
        this.numberOfLegs = numberOfLegs;
        return (`${this.name} is walking on ${this.legs} legs`);
    }
}

class Dog extends Pets {
    constructor(name, legs) {
        super(name, legs);
    }

    bark(dogSay) {
        this.dogSay = dogSay
        return (`${this.name} says WUF-WUF.`);
    }
}
// Only change code above this line

let dog = new Dog("Pujdo", 4); // Change this line
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
};