/* eslint no-undef: 0 */
import 'phaser';
import EnemyGroup from '../src/helper/enemyGroup';

test('EnemyGroup is a subclass of Phaser.Scene', () => {
  expect(EnemyGroup).toBeSubclassOf(Phaser.Physics.Arcade.Group);
});