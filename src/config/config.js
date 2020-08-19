import GameScene from '../scenes/gameScene'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 600 },
      // debug: true
    }
  },
  scene: [GameScene]
}

export default config