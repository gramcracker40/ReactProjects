 

const user = {
    name: "Garrett",
    age: 34,
    greet() {
        console.log("Error not found"),
        console.log(this.age + " " + this.name)
    },
    info: {
        address: "1234 avenue lane"
    }
};

console.log(user.name);
user.greet();


//creates a blueprint
class User {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    greet() {
        console.log("HEllo")
    }
}

const user1 = User("Garrett", 21);
console.log(user1)
