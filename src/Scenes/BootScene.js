import 'phaser';
import logo from '../../assets/images/logo-bg.png';
// eslint-disable-next-line no-undef
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.spritesheet('logo', logo , { frameWidth: 497, frameHeight: 281 });
  }

  create() {
    this.scene.start('Preloader');
  }
}
