let accountBalance = 100;

const canIAffordThis = (item) => {
    let stateTax = .06;
    let itemWithTax = (item * stateTax) + item;
    //console.log(itemWithTax.toFixed(2));
    let balanceAfterPurchase = accountBalance - itemWithTax;
    //console.log(balanceAfterPurchase.toFixed(2));

    if (itemWithTax > accountBalance) {
        console.log("You can not afford to buy this!")
    } else if (itemWithTax < accountBalance) {
        console.log(`You can afford to buy this item! But, your account balance will be $${balanceAfterPurchase.toFixed(2)}.`)
    }
}

canIAffordThis(32);