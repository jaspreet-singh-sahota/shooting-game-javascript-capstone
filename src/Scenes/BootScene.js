import 'phaser';
// eslint-disable-next-line no-undef
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.spritesheet('logo', '../../assets/images/logo-bg.png', { frameWidth: 497, frameHeight: 281 });
  }

  create() {
    this.scene.start('Preloader');
  }
}
