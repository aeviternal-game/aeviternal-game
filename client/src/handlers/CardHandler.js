export default class CardHandler {
    constructor() {

        // flipcard function, if one would want to implement it
        this.flipcard = (card) => {
            if (card.data.values.type === 'playerCard') {
                if (card.texture.key === "card-back1") {
                    card.setTexture(card.data.values.sprite);
                } else {
                    card.setTexture("card-back1");
                }
            } else if (card.data.values.type === "opponentCard") {
                if (card.texture.key === "card-back2") {
                    card.setTexture(card.data.values.sprite);
                } else {
                    card.setTexture("card-back2");
                }
            }
        }
        // would need to have the server figure out whether you're
        // allowed to flip a card or no.
    }
}