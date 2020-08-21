import 'phaser'
import playerAttackGroup from '../src/helper/playerAttackGroup';

test('playerAttackGroup is a subclass of Phaser.Scene', () => {
  expect(playerAttackGroup).toBeSubclassOf(Phaser.Physics.Arcade.Group);
});