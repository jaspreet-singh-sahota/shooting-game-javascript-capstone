export default class Laser extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'playerAttack', 30);
  }

  fire(x, y) {
    this.body.reset(x, y);
    this.setActive(true);
    this.setVisible(true);
    this.setVelocityX(700);
    this.body.enable = true
  }
}