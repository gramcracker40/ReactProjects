// arrays

const usernames = ["garrett", "moremoremore"];

//const [first, last] = usernames; 

// or 

const [top, bottom] = [123, 1234];

// objects

// must unpack by name with objects, can also provide alias
const {fname: first, lname: last} = {
    first: "name1", 
    last: "name2"
};

const {fir: tes1, las: tes2} = user; 


// Spread operator --> ...array_name
// unpacks elements neatly, like python ** operator

const new_hobbies = ["code react"];
const old_hobbies = ["football", "working out"];

const hobbies = [...new_hobbies, ...old_hobbies];


const old_user = {name: "Gar", id: 1};
const new_user = {name: "garth", id: 2};

const game_info = {game: "Black flag", version: "1.2.3"};

const user1 = {...old_user, ...game_info};
const user2 = {...new_user, ...game_info};