/*
Objects with Constructor
*/

var Person = function (firstName, lastName, yearOfBirth, army, male, favoriteFood, countriesTraveled) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.army = army;
    this.male = male;
    this.favoriteFood = favoriteFood;
    this.countriesTraveled = countriesTraveled,
        this.ageCalc = function () {
            const currentdate = new Date();
            const year = currentdate.getFullYear();
            const myAge = this.age = year - this.yearOfBirth;
            return myAge;
        }
}


var santino = new Person('Santino', 'Cuccia', 2011, false, true, 'pasta with chicken wings with a little pepper and a touch of salt',
    ['Jamaica', 'Costa Rica']);


var daddy = new Person('Michael', 'Cuccia,', 1979, true, true, 'steak and mashy', ['Germany', 'Italy', 'India']);

console.log(santino);
const santinoAge = santino.ageCalc();
console.log(santinoAge);

console.log(daddy);
const daddyAge = daddy.ageCalc();
console.log(daddyAge);
