import 'phaser'
import EnemyAttackGroup from '../src/helper/enemyAttackGroup';

test('EnemyAttackGroup is a subclass of Phaser.Scene', () => {
  expect(EnemyAttackGroup).toBeSubclassOf(Phaser.Physics.Arcade.Group);
});
