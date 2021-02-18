//Take a string of words and print it backwards


//string of words
let words = "jan feb mar apr may jun jul aug sep oct nov dec";

//empty array
let newWords = [];

//function to separate each month into a string of its own
function newArray(str) {
    janSlice = str.slice(0, 3);
    febSlice = str.slice(4, 7);
    marSlice = str.slice(8, 11);
    aprSlice = str.slice(12, 15);
    maySlice = str.slice(16, 19);
    junSlice = str.slice(20, 23);
    julSlice = str.slice(24, 27);
    augSlice = str.slice(28, 31);
    sepSlice = str.slice(32, 35);
    octSlice = str.slice(36, 39);
    novSlice = str.slice(40, 43);
    decSlice = str.slice(44, 47);
}

//call function to separate each month into string of its own
newArray(words);
console.log(janSlice, febSlice, marSlice, aprSlice, maySlice, junSlice, julSlice, augSlice, sepSlice, octSlice, novSlice, decSlice);

//push each new string into an array
newWords.push(janSlice, febSlice, marSlice, aprSlice, maySlice, junSlice, julSlice, augSlice, sepSlice, octSlice, novSlice, decSlice);
console.log(newWords);

//run a backwards forLoop on the new array 
for (var i = newWords.length - 1; i >= 0; i--) {
    console.log(newWords[i]);
};