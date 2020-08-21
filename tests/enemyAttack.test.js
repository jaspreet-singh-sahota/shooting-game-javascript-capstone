import 'phaser'
import EnemyAttack from '../src/helper/enemyAttack';

test('EnemyAttack is a subclass of Phaser.Scene', () => {
  expect(EnemyAttack).toBeSubclassOf(Phaser.Physics.Arcade.Sprite);
});
