/*
find particular characters in a string
remove characters
then, print string to console
*/

const string = "Michael, Renita, Santino, Leela";

const arr = string.split(',');

let newArr = [];
arr.forEach(item => {
    newItem = item.trimStart();
    newArr.push(newItem);
});

const newString = newArr.join(' ');

console.log(newString)