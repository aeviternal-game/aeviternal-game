export default class ZoneHandler {
    // so stuff goes into the zonehandler and then just directly bopped onto the scene that's also passed in?
    constructor(scene) {
        this.renderZone = (x, y, height, width) => {
            let dropZone = scene.add.zone(x, y, height, width).setRectangleDropZone(height, width);
            dropZone.setData({
                "cards": 0
            });
            return dropZone;
        }
        this.renderOutline = (dropZone) => {
            let dropZoneOutline = scene.add.graphics();
            dropZoneOutline.lineStyle(2, 0x99494b);
            dropZoneOutline.strokeRect(dropZone.x - dropZone.input.hitArea.width / 2, dropZone.y - dropZone.input.hitArea.height / 2, dropZone.input.hitArea.width, dropZone.input.hitArea.height);
        }
    }
}