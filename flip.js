// Import the coinFlip function from your coin.mjs file
const {coinFlip} = require('./modules/coin.js')
// Call the coinFlip function and put the return into STDOUT
module.exports = function flip() {
	return {'flip':coinFlip()};
}
