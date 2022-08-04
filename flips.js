// Import the coinFlip function from your coin.mjs file
import {coinFlips, countFlips} from './modules/coin.mjs' 

export default function flips(number) {

	var array = coinFlips(number);
	
	return {'raw':array, 
			'summary':countFlips(array)
			};
}
