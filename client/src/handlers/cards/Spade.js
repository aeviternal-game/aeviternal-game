import Card from "./Card";

export default class Spade extends Card {
    constructor (scene) {
        super(scene);
        this.name = "spade";
        this.playerCardSprite = "card-spades-1";
        this.opponentCardSprite = "card-spades-1";
    }
}