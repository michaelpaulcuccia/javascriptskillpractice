//[...Array(product.countInStock).keys()].map(x => (<option key={x + 1} value={x + 1}>{x + 1}</option>))

let product = {
    id: 1,
    countInStock: 10
}

//console.log(product.countInStock);

/*
//First Attempt
let arr = Array(product.countInStock);
console.log(arr);
//[ <10 empty items> ]

let arr2 = Array(product.countInStock).keys();
console.log(arr2);
//Object [Array Iterator] {}
*/

/*
//Second Attempt
let arr = [Array(product.countInStock)];
console.log(arr);
//[ [ <10 empty items> ] ]

let arr2 = [Array(product.countInStock).keys()];
console.log(arr2);
//[ Object [Array Iterator] {} ]
*/

let arr = [...Array(product.countInStock).keys()].map(x => x + 1);
console.log(arr)
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]