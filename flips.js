// Import the coinFlip function from your coin.mjs file
const {coinFlips, countFlips} = require('./modules/coin.js')

module.exports = function flips(number) {

	var array = coinFlips(number);
	
	return {'raw':array, 
			'summary':countFlips(array)
			};
}
