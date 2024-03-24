import { Scene } from 'phaser';

import UIHandler from '../handlers/UIHandler';
import CardHandler from '../handlers/CardHandler';
import DeckHandler from '../handlers/DeckHandler';
import GameHandler from '../handlers/GameHandler';
import InteractiveHandler from '../handlers/InteractivityHandler';
import SocketHandler from '../handlers/SocketHandler';

export class Game extends Scene
{
    constructor ()
    {
        super({ // why does this work? see here: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/
            key: 'Game'
        });
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x333333);

        // this.add.image(512, 384, 'background').setAlpha(0.5);

        // this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
        //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // }).setOrigin(0.5);


        // my stuff
        this.CardHandler = new CardHandler();
        this.DeckHandler = new DeckHandler(this);
        this.GameHandler = new GameHandler(this);
        this.SocketHandler = new SocketHandler(this);
        this.UIHandler = new UIHandler(this);
        this.UIHandler.buildUI();
        this.InteractiveHandler = new InteractiveHandler(this);

        // // testing
        // this.add.image(100, 100, 'card-clubs-1');

        // // switch to GameOver scene
        // this.input.once('pointerdown', () => {

        //     this.scene.start('GameOver');

        // });
    }

}