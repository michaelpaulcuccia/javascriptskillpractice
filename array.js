/*
add to beginning and end of an array
*/

var myArray = ['a', 'b', 'c', 'd'];

myArray.push('end');
myArray.unshift('start');

console.log(myArray);

//using spread operator 

var anotherArray = ['1', '2', '3', '4'];

anotherArray = ["alpha", ...anotherArray, "omega"];

console.log(anotherArray);