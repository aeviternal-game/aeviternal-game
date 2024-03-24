export default class GameHandler {
    constructor() {
        this.gameState = "Initializing";
        this.isMyTurn = false;
        this.playerDeck = [];
        this.opponentDeck = [];
        this.playerHand = [];
        this.opponentHand = [];

        this.changeTurn = () => {
            this.isMyTurn = !this.isMyTurn;
            console.log("isMyTurn: " + this.isMyTurn);
        }

        this.changeGameState = (gameState) => {
            // used for security/privacy sake?? hm (tut pt4, 3:20)
            this.gameState = gameState;
            console.log("GameState: " + this.gameState);
        }
    }
}