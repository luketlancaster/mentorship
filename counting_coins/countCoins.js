function coinCounter(amount) {
    // Convert to number of cents, for easier maths
    let cents = amount * 100;

    // Initialize a JavaScript object to hold the coins
    var coinPurse = {
        'quarters': 0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0,
    };

    let leftovers = cents % 25;

    coinPurse.quarters = (cents - leftovers) / 25;

    cents = leftovers;
    leftovers = cents % 10;
    coinPurse.dimes = (cents - leftovers) / 10;


    cents = leftovers;
    leftovers = cents % 5;
    coinPurse.nickels = (cents - leftovers) / 5;

    coinPurse.pennies = leftovers;

    return coinPurse;
}

var coins = coinCounter(1.44);
console.log(coins);
