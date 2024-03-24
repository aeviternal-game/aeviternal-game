// server-side functionality
// see SocketHandler.js for client-side stuff.

const server = require('express')();
const http = require('http').createServer(server);
const shuffle = require('shuffle-array');
const cors = require('cors'); // cross-origin resource sharing (cors) - for socket.io
const path = require('path');
const serveStatic = require('serve-static');
const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ["GET", "POST"]
    }
});
// server broadcasting on: http://localhost:3000
// client broadcasting on : http://localhost:8080


server.use(cors());
server.use(serveStatic(__dirname + "/client/dist"));

// (frontend) we're gona build this client into a bunch of static files
// (backend?) use server to serve these files
// ??so the __dirname thing is to set directory for distributable??

// when running locally, this works easy on localhost:3000 port
// when running remotely, we need to set localhost to the localhost
// of the process that's running, somewhere on the cloud
// see at the bottom vvv

let players = {};
let readyCheck = 0;
let gameState = "Initializing";

io.on('connection', function(socket) {
    console.log('A user connected: ' + socket.id);

    // add player to players list
    players[socket.id] = {
        inDeck: [],
        inHand: [],
        isPlayerA: false
    }

    // give first turn to player who connected first
    if (Object.keys(players).length < 2) {
        players[socket.id].isPlayerA = true;
        io.emit('firstTurn');
    } // need to implement the thing with first turn going to lowest spade

    socket.on('dealDeck', function(socketId) {
        players[socketId].inDeck = shuffle(["spade", "heart"]);
        console.log(players);
        if (Object.keys(players).length < 2) return;
        io.emit('changeGameState', "Initializing");
    })

    socket.on('dealCards', function(socketId) {
        for (let i = 0; i < 5; i++) {
            if (players[socketId].inDeck.length === 0) {
                players[socketId].inDeck = shuffle(["spade", "heart"]);
            }
            players[socketId].inHand.push(players[socketId].inDeck.shift());
        }
        console.log(players);
        io.emit('dealCards', socketId, players[socketId].inHand);
        readyCheck++;
        if (readyCheck >= 2) {
            gameState = "Ready";
            io.emit('changeGameState', "Ready");
        }
    })

    socket.on('cardPlayed', function(cardName, socketId) {
        io.emit('cardPlayed', cardName, socketId);
        io.emit('changeTurn');
    })
})

// localhost:3000 for the running process
const port = process.env.PORT || 3000;

http.listen(port, function (){
    console.log('Server started!');
})


/* On arrow functions

In this code, `io.on('connection', function(socket) { ... })`,
a regular function is used instead of an arrow function for
a specific reason related to how `this` is bound in JavaScript.

When using arrow functions, `this` is lexically scoped, meaning
it retains the value of `this` from its enclosing context.
However, in this case, `this` would be bound to the global
context if an arrow function were used. This would result
in `this` referring to the global object (e.g., `window`
in a browser environment) instead of the Socket.IO instance (`io`).

By using a regular function declaration `function(socket) { ... }`,
`this` inside the function refers to the Socket.IO instance
(`io`), which is the desired behavior. This allows you to access
properties and methods of the Socket.IO instance within the function.

So, while you could use an arrow function `(socket) => { ... }`
and access `io` from the outer scope, it's safer and more conventional
to use a regular function here to ensure that `this` refers to
the Socket.IO instance.
*/
