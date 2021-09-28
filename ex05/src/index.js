// Only change code below this line
class Microsoft {
    constructor(name) {
        this.name = name;
    }

    get() {
        return this.name;
    }

    set(newName) {
        this.name = newName;
    }

    occupation() {
        return (`${this.name} is filantropist!`);
    }
}

class Facebook extends Microsoft {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    studentAge() {
        return (`${this.name} is ${this.age}`);
    }
}

let henry = new Microsoft("William Henry Gates III");
console.log(henry.occupation());
henry.occupation();
let elliot = new Facebook("Mark Eliott Zuckenberg", 23);
console.log(elliot.occupation());
elliot.occupation();
console.log(elliot.studentAge());
elliot.studentAge();
// Only change code above this line
module.exports = {
    Microsoft,
    Facebook
}