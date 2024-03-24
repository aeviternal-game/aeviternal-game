export default class Card {
    constructor(scene) {
        // add more types? suits?
        this.render = (x, y, type) => {
            let sprite;
            if (type === 'playerCard') {
                sprite = this.playerCardSprite;
            } else {
                sprite = this.opponentCardSprite;
            }
            let card = scene.add.image(x, y, sprite).setInteractive().setData({
                "name": this.name,
                "type": type,
                "sprite": sprite
            });
            if (type === 'playerCard') {
                scene.input.setDraggable(card);
            }
            return card;
        }
    }
}

// I think we'll need to change this. I think we give
// each card a unique id, which would be suit and value
// and then as the cards are drawn we set owners.
// so only the owner can move the card around.
//
// egemen proposed that we do classes like they're doing here
// but we would end up with 52+ classes? seems wild?