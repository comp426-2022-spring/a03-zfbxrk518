//import express from 'express'
//import flip from './flip.js'
//import flips from './flips.js'
//import guess from './guess-flip.js'
const express = require('express')
const flip = require('./flip.js')
const flips = require('./flips.js')
const guess = require('./guess-flip.js')
const app = express()

const HTTP_PORT = 5000;

// Start an app server
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});

app.get('/app/', (req, res) => {
// Respond with status 200
	res.statusCode = 200;
// Respond with status message "OK"
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end(res.statusCode+ ' ' +res.statusMessage)
});

app.get('/app/flip', (req, res) => {

	res.json(flip());
	
});

app.get('/app/flips/:number', (req, res) => {
	
	res.json(flips(req.params.number));
	
});

app.get('/app/flips/call/:callcall', (req, res) => {
	
	res.json(guess(req.params.callcall));
	
});

// Default response for any other request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});


