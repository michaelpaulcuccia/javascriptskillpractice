/*
Update objects in an array
*/

const arr = [
    { "id": "id_1" },
    { "id": "id_2" },
    { "id": "id_3" }
];

const addKeyVal = arr.map(item => {
    return { ...item, added: 'yes' }
});

console.log(addKeyVal);