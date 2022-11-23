function toUpper(string) {
    return string.toUpperCase();
}

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) { // for..of
    console.log(cat);
}

const upperCats = cats.map(toUpper); // map() does something to each item in a collection an creates a new collection containing the changed items
console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
// Here we pass a function (function toUpper(string)) into cats.map(). map() calls the function once for each item in the array.
// It then adds the return value from each function call to a new array and then returns the ned array
// The function is to convert the items to uppercase so the result contains all the cats in  uppercase

function lCat(cat) {
    return cat.startsWith('L');
}

 const filtered = cats.filter(lCat); // filter() test each item in a collection and creates a new collection containing only items that match. 

console.log(filtered);
// ['Leopard', 'Lion']

// map() and filter() are both used with function expressions. Rewritten to be more compact:

// const filtered = cats.filter((cat) => cat.startsWith('L'));
// console.log(filtered);
// [ "Leopard", "Lion" ]


for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
} // starts 'i' at 0 and stops 'i' when it reaches the length of the arryay. 
// But it's better to use for...of beause you might start i at 1, forgetting that the first array index is zero, not 1. 
//You might stop at i <= cats.length, forgetting that the last array index is at length - 1.

const myCats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

for (const cat of myCats) {
    myFavoriteCats += `${cat},`
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "