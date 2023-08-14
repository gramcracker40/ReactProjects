const val1 = "Garth";
const val2 = "Nothing";



if (val1 === val2) {
    console.log("Truthhh");
} else if (val1 !== val2) {
    console.log("Wow examples");
} else {
    console.log("really don't know how you got here");
}

// for loop 
hobbies = ["this", "that", "And the other"];

for (const hobby in hobbies){
    console.log(`Wow this ${hobby} is a super cool hobby`);
}


// handling functions within functions

function handle_timeout() {
    console.log("Pausing for 30");
}

const handle_timeout1 = () => {
    console.log("Pausing for 50");
}

setTimeout(handle_timeout);

setTimeout(() => {

}, 4500);

function greeter(greetFn) {
    function anon(rando){
        return rando + 1
    }
    
    greetFn();
    const rand = anon(3);
    console.log(rand);
}

greeter(() => console.log("Hello there..."));