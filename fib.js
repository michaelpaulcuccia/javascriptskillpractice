const fib = (number) => {
    let zero = 0;
    let one = 1;
    let startSequence = zero + one + one;
    //console.log(startSequence)
    let numArry = [zero, one, one]
    //console.log(numArry)
    numArry.push(number)
    console.log(numArry)


}

fib(5)