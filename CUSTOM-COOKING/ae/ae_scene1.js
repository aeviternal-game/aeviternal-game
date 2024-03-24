class ae_scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        // const assetpath = "ae/assets/images";
        this.load.image("clubs-2", "ae/assets/images/card-clubs-2.png");
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}