// Only change code below this line
class Person {
    constructor(name) {
        this.namePerson = name;
    }

    static display() {
        let message = "Static method is invoked from Person class";
        return console.log(message);
    }

    static show() {
        return this.display();
    }
}


// Only change code above this line
var message = new Person();
message.show();
module.exports = Person;