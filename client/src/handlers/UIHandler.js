import ZoneHandler from "./ZoneHandler";

export default class UIHandler {
    constructor(scene) {

        this.zoneHandler = new ZoneHandler(scene);

        this.buildZones = () => {
            scene.dropZone = this.zoneHandler.renderZone(50+325, 300+100, 650, 200);
            this.zoneHandler.renderOutline(scene.dropZone);
        }

        this.buildPlayerAreas = () => {
            scene.playerHandArea = scene.add.rectangle (50, 50, 650, 200).setOrigin(0,0);
            scene.playerHandArea.setStrokeStyle(4, 0x99494b);
            scene.playerDeckArea = scene.add.rectangle (750, 60, 100, 150).setOrigin(0,0);
            scene.playerDeckArea.setStrokeStyle(3, 0x99494b);

            scene.opponentHandArea = scene.add. rectangle (50, 550, 650, 200).setOrigin(0,0);
            scene.opponentHandArea.setStrokeStyle(4, 0x99494b);
            scene.opponentDeckArea = scene.add.rectangle (750, 560, 100, 150).setOrigin(0,0);
            scene.opponentDeckArea.setStrokeStyle(3, 0x99494b);
        }

        // make a function variable in UIHandler?
        this.buildGameText = () => {
            scene.dealCards = scene.add.text(750, 400, "Deal Cards");
        }

        this.buildUI = () => {
            this.buildZones();
            this.buildGameText();
            this.buildPlayerAreas();
        }
    }
}