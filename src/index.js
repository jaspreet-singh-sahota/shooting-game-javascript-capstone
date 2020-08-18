import './styles/style.css';

import GameScene from './Scenes/GameScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [GameScene]
}

export default new Phaser.Game(config)