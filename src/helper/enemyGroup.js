import Enemy from './enemy';

export default class EnemyGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      frameQuantity: 30,
      key: 'enemy',
      active: false,
      visible: false,
      classType: Enemy
    });
  }

  createEnemy(x, y) {
    const enemy = this.getFirstDead(false);

    if (enemy) {
      enemy.enemyPosition(x, y);
    }
  }
}