/*
A Narcissistic Number is a number which is the sum of its own digits, 
each raised to the power of the number or digits in a given base.

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
1     5     3                    153

1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
1     6     3     4                           1634

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Math.pow(base, exponent)

*/

console.log(Math.pow(4, 4));


const narcissist = number => {
    let power = number.toString().length
    //console.log(power); //3
    let digits = number;
    //console.log(digits); //153
    let numberString = digits.toString();
    //console.log(numberString); //'153'
    let theNumbers = [];
    for (var i = 0; i < numberString.length; i++) {
        theNumbers.push(parseInt(numberString[i]))
    };
    //console.log(theNumbers); //[1, 5, 3]
    let powerDigits = [];
    for (var i = 0; i < theNumbers.length; i++) {
        powerDigits.push(Math.pow(theNumbers[i], power)); //[1, 125, 27]
    }
    //console.log(powerDigits);
    var sum = powerDigits.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    //console.log(sum); //153
    sum == number ? console.log(`${sum} is a narcissistic number`) : console.log(`${sum} is not a narcissistic number`);
}

narcissist(153);
narcissist(234);
