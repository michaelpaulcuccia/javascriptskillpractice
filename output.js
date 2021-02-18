//what is the ouput?


var num = 4;
function outer() {
    var num = 2;
    function inner() {
        num++; //does nothing 
        var num = 3;
        console.log(num);
    }
    inner();
}
outer();


//*************************************************************


//what is the output

console.log(typeof typeof 1);
//typeof 1 = number ('number' is a STRING!)


//*************************************************************


//what is the output

var hero = {
    _name: 'Jon Doe',
    getSecretIdentity: function () {
        return this._name
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());