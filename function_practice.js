//#1 Figure out how many people are on the bus.


const numberOfRiders = function (busStops) {
    let onBus = busStops[0];
    //console.log(onBus);
    //console.log(typeof onBus);
    let getOff = busStops[1];
    //console.log(getOff);
    //console.log(typeof getOff);
    let stillOnBus = onBus - getOff;
    //console.log(stillOnBus);
    return console.log(`${onBus} passengers were on the bus, ${getOff} got off the bus. ${stillOnBus} people are still on the bus.`);
}

numberOfRiders([10, 5]);
numberOfRiders([7, 5]);
numberOfRiders([11, 3]);


//#2 Find out if a string contains any vowels


const findVowels = (words) => {
    let firstString = words.toString();
    //console.log(firstString);
    //console.log(typeof firstString);
    if (firstString.includes('a') || firstString.includes('e') || firstString.includes('i') || firstString.includes('o') || firstString.includes('u')) {
        console.log(`The string \"${words}\" has vowles.`)
    } else {
        console.log(`The string \"${words}\" has NO vowles.`)
    }
}

findVowels('Here we go');
findVowels('Mmmm...')



//#3 See if you have enough money to buy an item, with 15% tax


let accountBalance = 100;

const canIAffordThis = (item) => {
    let addTax = item * .15;
    //console.log(addTax);
    let itemWithTax = item + addTax;
    //console.log(itemWithTax);
    let balanceAfterPurchase = accountBalance - itemWithTax;
    //console.log(balanceAfterPurchase);
    if (itemWithTax < accountBalance) {
        console.log('You have enough money to afford this! Your balance will be $' + balanceAfterPurchase.toFixed(2) + '.')
    } else if (itemWithTax === accountBalance) {
        console.log('This item costs EXACTLY as much as you have in the bank. Are you sure you want to do this?')
    } else if (itemWithTax > accountBalance) {
        console.log('You can not afford to buy this. You are short $' + balanceAfterPurchase.toFixed(2) + '.')
    }
}

canIAffordThis(50);
canIAffordThis(86);
canIAffordThis(99);



//#4 friends Array

let friends = [
    {
        name: 'Michael',
        age: 40,
        married: true,
        hobbies: ['climbing', 'hiking', 'jiu-jitsu']
    },
    {
        name: 'David',
        age: 34,
        married: true,
        hobbies: 'hiking'
    },
    {
        name: 'Renita',
        age: 38,
        married: true,
        hobbies: ['hiking', 'jiu-jitsu']
    },
    {
        name: 'Eddie',
        age: 32,
        married: false,
        hobbies: ['hiking', 'jiu-jitsu']
    }
];


//#4A return all married friends

for (var i = 0; i < friends.length; i++) {
    if (friends[i].married === true) {
        console.log(`${friends[i].name} is married.`)
    } else if (friends[i].married === false) {
        console.log(`${friends[i].name} is not married`)
    }
}


//#4B find average age of friends

//friends.map((currentValue) => console.log(currentValue.age));

let ages = friends.map((currentValue) => currentValue.age);
//console.log(ages);

let totals = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//console.log(totals);

let averageAge = totals / friends.length;
console.log(averageAge);


//#3C Find Married Friends whose hobbies include Jiu-Jitsu -- NOT FINISHED!! --

for (var i = 0; i < friends.length; i++) {
    if (friends[i].married === true && friends[i].hobbies.includes('jiu-jitsu')) {
        console.log(`${friends[i].name} is married and trains!`)
    } else if (friends[i].married === true && !friends[i].hobbies.includes('jiu-jitsu')) {
        console.log(`${friends[i].name} is married but doesn't train`)
    } else if (friends[i].married === false && friends[i].hobbies.includes('jiu-jitsu')) {
        console.log(`${friends[i].name} is not married but trains!`)
    }
}