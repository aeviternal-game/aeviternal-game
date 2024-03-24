import Card from "./Card";

export default class Heart extends Card {
    constructor (scene) {
        super(scene);
        this.name = "heart";
        this.playerCardSprite = "card-hearts-1";
        this.opponentCardSprite = "card-hearts-1"
    }
}