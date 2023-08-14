export let func = "This is random";
export let va = 1234;


function greet(name, extra="Default") {
    console.log(`Hello I am ${name}`);


    return `HEREE ${extra}`
};

test = greet("Garrett");
console.log(test);


// ARROW FUNCTIONS --> Anonymous (no name)

(user, message) => `${user} + ${message}`;
    
    

