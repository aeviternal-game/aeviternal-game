class ae_scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    // card dims: 94x144

    create() {
        // this.card = this.add.image(100, 100, "clubs-2");
        // this.card.setInteractive();

        // this.card.on('pointerdown', function () {
        //     this.card.setScale(1.1);
        // });

        // Create object to highlight
        var objectToHighlight = this.add.rectangle(400, 300, 100, 100, 0xff0000);

        // Enable input on the object
        objectToHighlight.setInteractive();

        // Add click event listener
        objectToHighlight.on('pointerdown', function () {
            // Highlight effect
            objectToHighlight.setFillStyle(0xffff00); // Change color to yellow
            objectToHighlight.setScale(1.1); // Scale up by 10%
        });
    }

}