export default class InteractiveHandler {
    constructor(scene) {

        scene.cardPreview = null;

        scene.dealCards.on('pointerdown', () => {
            scene.socket.emit("dealCards", scene.socket.id);
            scene.dealCards.disableInteractive();
        })

        scene.dealCards.on('pointerover', () => {
            scene.dealCards.setColor('#aaaaaa');
        })

        scene.dealCards.on('pointerout', () => {
            scene.dealCards.setColor('#ffffff');
        })

        // cardzoom
        scene.input.on('pointerover', (event, gameObjects) => {
            let pointer = scene.input.activePointer; // for Phaser to notice
            if (gameObjects[0].type === "Image" && gameObjects[0].data.list.name !== "cardBack") {
                // scene.cardPreview = scene.add.image(pointer.worldX, pointer.worldY, gameObjects[0].data.values.sprite).setScale(1.5, 1.5);
                scene.cardPreview = scene.add.image(pointer.worldX, pointer.worldY, gameObjects[0].data.values.sprite).setScale(1/3, 1/3);
            }
        })

        // cardzoom off
        scene.input.on('pointerout', (event, gameObjects) => {
            if (gameObjects[0].type === "Image" && gameObjects[0].data.list.name !== "cardBack") {
                // scene.cardPreview.setVisible(false);
                // scene.cardPreview = null; // necessary?
                scene.cardPreview.destroy(); // hmm
            }
        })

        // make object follow the mouse when dragged
        scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })

        // pick up and colour card
        scene.input.on('dragstart', (pointer, gameObject) => {
            gameObject.setTint(0x999999);
            scene.children.bringToTop(gameObject);
            scene.cardPreview.destroy(); // cardzoom off, hmm
        })

        // drop, if illegal return to where got from
        scene.input.on('dragend', (pointer, gameObject, dropped) => {
            gameObject.setTint();
            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })

        // if legal drop, align with dropZone
        scene.input.on('drop', (pointer, gameObject, dropZone) => {
            if (scene.GameHandler.isMyTurn && scene.GameHandler.gameState === "Ready") {
                gameObject.x = (dropZone.x - 200) + (dropZone.data.values.cards * 50);
                gameObject.y = dropZone.y;
                scene.dropZone.data.values.cards++;
                scene.input.setDraggable(gameObject, false);
                // should we allow players to place and remove cards until they press 'next turn button'?
                scene.socket.emit('cardPlayed', gameObject.data.values.name, scene.socket.id);
            } else {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })

    }
}