import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(512, 384, 'background');

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        this.load.image('logo', 'logo.png');

        // load all card backs and fronts
        this.load.image('card-back1', 'cards/card-back1.png');
        this.load.image('card-back2', 'cards/card-back2.png');
        this.load.image('card-back3', 'cards/card-back3.png');
        this.load.image('card-back4', 'cards/card-back4.png');
        this.load.image('card-blank', 'cards/card-blank.png');

        const suitnames = ['spades', 'hearts', 'clubs', 'diamonds'];
        const number = [1,2,3,4,5,6,7,8,9,10,11,12,13];

        suitnames.forEach(s => {
            number.forEach(n => {
                var imagename = "card-".concat(s, "-", n.toString());
                var filename = "cards/".concat(imagename, ".png");
                this.load.image(imagename, filename);
            });
        });

    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}
