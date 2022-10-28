import Phaser from 'phaser';
import GameScene from './scenes/gamecene';

const WINDOW_WIDTH: number = 800;
const WINDOW_HEIGHT: number = 600;

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    physics: {
        default: 'arcade',
        arcade:{
            gravity:{y: 200}
        }

    },
    scene:[GameScene]
};

export default new Phaser.Game(config);