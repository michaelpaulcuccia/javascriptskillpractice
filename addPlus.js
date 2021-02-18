let double = 'two words';
let single = 'word';

const convertedInputQuery = (inputValue) => {
    let inputArray = [];
    let convertedString;

    if (inputValue.includes(' ')) {
        console.log(inputValue + ' has spaces')
        //Convert to An Array
        inputArray = inputValue.split(' ');
        console.log(inputArray);
        //Merge Back To A String With '+''s
        convertedString = inputArray.join('+');
        console.log(convertedString);

    } else {
        console.log(inputValue + ' has no spaces')
        convertedString = inputValue;
        console.log(convertedString);
    }
}

convertedInputQuery(double);
convertedInputQuery(single);