- deploy to heroku?

1. install packages for deployment
- When exporting, must `npm install --save <packages>` in the server folder so that the cloud knows what to install.
- In the client folder webpack should take care of this?

2. process localhost [ToDo]
- setup `cors` and `serve-static` (top of server.js)
- change port to process localhost:3000 (bottom of server.js)
- in SocketHandler.js replace the socket io with the url of the website where the app runs. e.g. `http://localhost:3000` => `https://phaser-tabletop-card-game-2023.herokuapp.com/` and do the same with `http://localhost:8080` in server.js

3. build game for production
- this is why we use the Phaser 3 template w webpack.
- run `npm run build` to build the game.
- now can run from server??? `localhost:3000` ?? Do we need the dist for this? I would imagine so?

4. socket rooms??
- Look at socket.io ROOMS for clients joining in.
- Send this to frontend to let players choose how they're going to choose games w each other.
- Otherwise server will send messages to EVERYONE :s
- m.s.farzan mentioned that he's got a tabletop game project where he used rooms but he never linked it...