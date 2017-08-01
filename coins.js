console.log("Coins in the Bag");

var quarters = .25;
var dimes = .1;
var nickels = .05;
var pennies = .01;

var amount = "";
var quarterCoins = "";
var dimeCoins = "";
var nickelCoins = "";
var pennyCoins = "";

var balanceLessQ = "";
var balanceLessD = "";
var balanceLessN = "";


var coinPurse = document.getElementById("numberOfCoins");

function coinCounter(amount){
	var domString = "";

	quarterCoins = Math.floor(amount / quarters);


	if (quarterCoins >= 1){
		var quarterWorth = quarterCoins * quarters;
		balanceLessQ = amount - quarterWorth;
	} else {
		balanceLessQ = amount;
	}

	dimeCoins = Math.floor(balanceLessQ / dimes);

	if (dimeCoins >= 1){
		var dimeWorth = dimeCoins * dimes;
		balanceLessD = balanceLessQ - dimeWorth;
	} else {
		balanceLessD = balanceLessQ;
	}

	nickelCoins = Math.floor(balanceLessD / nickels);

	if (nickelCoins >= 1){
		var nickelWorth = nickelCoins * nickels;
		balanceLessN = balanceLessD - nickelWorth;
	} else {
		balanceLessN = balanceLessD;
	}

	pennyCoins = Math.ceil(balanceLessN / pennies);

	pennyWorth = pennyCoins * pennies;
}

coinCounter(3.67);

console.log(quarterCoins, dimeCoins, nickelCoins, pennyCoins);
