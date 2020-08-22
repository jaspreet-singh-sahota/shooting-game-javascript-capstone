import 'phaser';
import Button from '../Objects/Button';
import logoBg from '../../assets/images/logo-bg.png';
// eslint-disable-next-line no-undef
export default class StoryScene extends Phaser.Scene {
  constructor() {
    super('StoryScene');
  }

  preload() {
    this.load.image('bg', logoBg);
  }

  create() {
    const height = this.scale.height * 0.5;
    const width = this.scale.width * 0.5;
    this.add.image(width, height, 'bg').setScale(0.85, 1.13);

    this.playButton = new Button(
      this,
      width,
      height + 200,
      'blueButton1',
      'blueButton2',
      'Play',
      'Game',
    );
  }
}
