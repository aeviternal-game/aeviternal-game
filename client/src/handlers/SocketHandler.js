import io from 'socket.io-client';

// client-side socket functionality.

export default class SocketHandler {
    constructor(scene) {

        // server's listening on port 3000
        scene.socket = io('http://localhost:3000');

        // when socket within the scene connects:
        // emit (i.e. send message out) "i want you to deal the deck"
        // with the id of this specific socket
        // see pt5 3:30
        scene.socket.on('connect', () => {
            console.log('Connected!');
            scene.socket.emit('dealDeck', scene.socket.id);
        })

        // set 'is my turn' to true
        scene.socket.on('firstTurn', () => {
            scene.GameHandler.changeTurn();
        })

        // set game state and deal cards if it's initializing
        scene.socket.on('changeGameState', (gameState) => {
            scene.GameHandler.changeGameState(gameState);
            if (gameState === "Initializing") {
                scene.DeckHandler.dealCard(750+50, 560+75, "cardBack", "playerCard");
                scene.DeckHandler.dealCard(750+50, 60+75, "cardBack", "opponentCard");
                scene.dealCards.setInteractive();
                scene.dealCards.setColor("#00ffff");
            }
        })

        scene.socket.on('changeTurn', () => {
            scene.GameHandler.changeTurn();
        })

        // in InteractiveHandler when we click 'deal cards' (pointerdown)
        // we emit the message "dealCards" and send the socket id to the server.
        // And the server sends back the drawn cards to all the clients involved
        // and "if you are the id that sent this message, then you get dealt cards"
        // otherwise smthn else happens.

        // note that since we're sending out this info to both clients, there may be a securit issue
        scene.socket.on('dealCards', (socketId, cards) => {
            if (socketId === scene.socket.id) {
                for (let i in cards) {
                    let card = scene.GameHandler.playerHand.push(scene.DeckHandler.dealCard(100 + (i * 100) + 25, 560 + 75, cards[i], "playerCard"));
                }
            } else {
                for (let i in cards) {
                    let card = scene.GameHandler.opponentHand.push(scene.DeckHandler.dealCard(100 + (i * 100) + 25, 60 + 75, "cardBack", "opponentCard"));
                }
            }
        })

        scene.socket.on('cardPlayed', (cardName, socketId) => {
            if (socketId !== scene.socket.id) {
                scene.GameHandler.opponentHand.shift().destroy();
                scene.DeckHandler.dealCard((scene.dropZone.x - 200) + (scene.dropZone.data.values.cards * 50), scene.dropZone.y, cardName, "opponentCard");
                scene.dropZone.data.values.cards++;
            }
        })
    }
}