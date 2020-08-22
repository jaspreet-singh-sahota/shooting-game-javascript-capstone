import EnemyAttack from './enemyAttack';
// eslint-disable-next-line no-undef
export default class EnemyAttackGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      frameQuantity: 100,
      key: 'enemyAttack',
      active: false,
      visible: false,
      loop: true,
      classType: EnemyAttack,
    });
  }

  createEnemyAttack(x, y, player, scenes, playerAttackGroup) {
    const enemy = this.getFirstDead(false);
    if (enemy) {
      enemy.enemyPosition(x, y, player, scenes, playerAttackGroup);
    }
  }
}