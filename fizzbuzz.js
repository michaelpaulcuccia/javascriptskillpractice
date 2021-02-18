function fizzBuzz() {
  // Loop 100 times, starting from the number 1
  for (var i = 1; i < 101; i++) {
    // If divisible by 3 and 5,
    if (i % 3 === 0 && i % 5 === 0) {
      // print FizzBuzz.
      console.log("FizzBuzz");
    }
    // If divisible by 3, print fizz
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // If divisible by 5, print buzz
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    // If not divisible either 3 or 5, just print the number
    else {
      //console.log(i);
    }
  }
}

fizzBuzz();

//another variation...

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}