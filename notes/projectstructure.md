Q: if I'm only running 1 set of client code, how come I can join as multiple players on the server??

running software
- run client with `npm run dev` from client folder
- run server with `npm start` from top project folder

backend
- node.js: backend written in javascript? Handles js packages etc also?
- nodemon: watches our server (like webpack watches the client) and restarts if there's any changes
- socket.io: runs on the server side and communicates with clients across web

client
- webpack: watches client, restarts when changes are made, handles packages?
- phaser: game engine etc
    - config: set phaser game configs
    - scenes: scenes of the game (can even have multiple on at the same time?)

scenes
- game
    - ui handler: gets UI workin'


== unsure ==
- socket handler seems to be handling how the server and client interacts? So, like, when stuff happens clientside - what does the server receive?
- and then we'll tell the server what to do when it receives those messages?