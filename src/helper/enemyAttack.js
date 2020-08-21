 export default class EnemyAttack extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemyAttack', 10);
  }

  enemyPosition(x, y) {
    this.body.reset(x, y);
    this.setActive(true);
    this.setVisible(true);
    this.body.enable = true
  }
}