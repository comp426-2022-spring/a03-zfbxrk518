// Import the coinFlip function from your coin.mjs file
import {coinFlip} from './modules/coin.mjs' 
// Call the coinFlip function and put the return into STDOUT
export default function flip() {
	return {'flip':coinFlip()};
}
