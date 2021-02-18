/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
eg:
validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/


const validatePin = (pin) => {
    //console.log(typeof pin); //number
    let splitPinString;

    if (typeof pin !== 'number') {
        console.log(`${pin} is not valid. Pin can only numbers. And Pin must be either 4 OR 6 digits in length.`);
    } else if (typeof pin == 'number') {
        let pinString = pin.toString();
        //console.log("pinString: " + pinString);
        splitPinString= pinString.split('');
        //console.log(splitPinString);
            if (splitPinString.length === 4 || splitPinString.length === 6) {
                console.log(`Your pin: ${pin} is ok!`)
            } else {
                console.log(`Your pin: ${pin} is not ok. Pin must be either 4 OR 6 digits in length.`)
            }
    }
    

    
}

validatePin(123456);
validatePin(1234);
validatePin(123456789);
validatePin('abcde4');