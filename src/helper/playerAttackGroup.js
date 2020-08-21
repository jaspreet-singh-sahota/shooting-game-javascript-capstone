import Laser from './playerAttack';

export default class LaserGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      frameQuantity: 1,
      key: 'playerAttack',
      active: false,
      visible: false,
      classType: Laser
    });
  }

  fireBullet(x, y) {
    const laser = this.getFirstDead(false);

    if (laser) {
      laser.fire(x, y);
    }
  }
}