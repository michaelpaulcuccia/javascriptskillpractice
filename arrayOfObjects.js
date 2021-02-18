/*
Take an array, and create an array of objects
*/

let arr = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5"
];

newArr = [];
const createAnArrayOfObjects = (arr) => {
    let obj = {};

    arr.forEach((element) => {
        obj = { element };
        newArr.push(obj)
    });

}

createAnArrayOfObjects(arr);
console.log(newArr);