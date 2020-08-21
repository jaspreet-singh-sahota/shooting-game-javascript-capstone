// eslint-disable-next-line no-undef
export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy', 10);
  }

  enemyPosition(x, y) {
    this.body.reset(x, y);
    this.setActive(true);
    this.setVisible(true);
    this.flipX = true;
    this.setScale(1.4, 1.4);
    this.anims.play('enemy');
    this.body.enable = true;
  }
}