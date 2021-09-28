// Only change code below this line
class Pets {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }

    static walk(numberOfLegs) {
        this.legs = numberOfLegs;
        return this._name + " is walking on " + numberOfLegs + " legs";
    }
}

class Dog extends Pets {
    constructor(name, legs) {
        super(name, legs);
    }

    static bark(dogSay) {
        this.name = dogSay
        return this.name + " says WUF-WUF";
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