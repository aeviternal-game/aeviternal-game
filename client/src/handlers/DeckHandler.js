import CardBack from "./cards/CardBack";
import Spade from "./cards/Spade";
import Heart from "./cards/Heart";

export default class DeckHandler {
    constructor(scene) {
        this.dealCard = (x, y, name, type) => {
            let cards = {
                cardBack: new CardBack(scene),
                spade: new Spade(scene),
                heart: new Heart(scene)
            }
            let newCard = cards[name];
            return(newCard.render(x, y, type));
        }
    }
}