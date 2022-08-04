// Import the coinFlip function from your coin.mjs file

const {coinFlip, flipACoin} = require('./modules/coin.js')


module.exports = function guess(call) {

	var flip = coinFlip();
	
	return {call, 
			flip, 
			result:call===flip?'win':'lose'
			}
}
