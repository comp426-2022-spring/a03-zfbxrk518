// Import the coinFlip function from your coin.mjs file

import {coinFlip, flipACoin} from './modules/coin.mjs' 


export default function guess(call) {

	var flip = coinFlip();
	
	return {call, 
			flip, 
			result:call===flip?'win':'lose'
			}
}
