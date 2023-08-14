const hobbies = ["code", "code more", "code a bit longer"];
console.log(hobbies[0])

// just like python, dont matterrrrr
const nested = [1, 2, 3, [1, 2, 3, [1, 2, 3, 4]]]

//different functions
nested.push(4)

const search_word = "code"
search_hobbies = hobbies.findIndex((item) => item === search_word);

const more_hobbies = hobbies.map(() => item + " more")
const even_cooler = hobbies.map((item) => ({text: item}))



console.log(nested)