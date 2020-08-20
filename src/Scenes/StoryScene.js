import 'phaser';
import Button from '../Objects/Button';
import Dom from '../Objects/dom';
// eslint-disable-next-line no-undef
export default class StoryScene extends Phaser.Scene {
  constructor() {
    super('StoryScene');
  }

  preload() {
    this.load.image('bg', 'assets/images/logo-bg.png');
  }

  create() {
    let height = this.scale.height * 0.5
    let width = this.scale.width * 0.5
    this.add.image(width, height, 'bg').setScale(0.85, 1.13);

    const div = Dom.createStory();

    this.add.dom(
      this.game.width * 2 + 50,
      this.game.hight,
      div,
    );

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
