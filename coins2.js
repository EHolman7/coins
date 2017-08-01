//Coin counting function 
function coinCounter(input) { 
 
 
    //Object to hold the coins 
    var coinPurse = {}; 
 
 
    // Convert decimal amount to whole number 
    input = input * 100; 
 
 
    // Determine remainder after quarters. 
    var balanceLessQuarters = input % 25; 
    // subtract that remainder and divide that number by quarters. add the number of quarters to the object (coinPurse) 
    coinPurse.quarters = (input - balanceLessQuarters) / 25; 
 
 
    var balanceLessDimes = balanceLessQuarters % 10; 
    coinPurse.dimes = (balanceLessQuarters - balanceLessDimes) / 10; 
 
 
    var balanceLessNickels = balanceLessDimes % 5 
    coinPurse.nickels = (balanceLessDimes - balanceLessNickels) / 5; 
 
 
    //the remaining change equals the number of pennies 
    coinPurse.pennies = balanceLessNickels; 
 
 
    //Call function to the completed object (coinPurse) 
    return coinPurse; 
} 
 
 
var coins = coinCounter(1.67); 
console.log(coins);