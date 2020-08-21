import 'phaser';
import Button from '../Objects/Button';
/* eslint-disable no-undef */
export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    this.load.image('bg', 'assets/images/title-bg.png');
  }

  create() {
    const height = this.scale.height * 0.5;
    const width = this.scale.width * 0.5;
    this.add.image(width, height, 'bg').setScale(0.85, 1.13);

    this.storyButton = new Button(
      this,
      width,
      height - 150,
      'blueButton1',
      'blueButton2',
      'Play',
      'StoryScene',
    );

    this.optionsButton = new Button(
      this,
      width,
      height - 50,
      'blueButton1',
      'blueButton2',
      'Options',
      'Options',
    );

    this.creditsButton = new Button(
      this,
      width,
      height + 50,
      'blueButton1',
      'blueButton2',
      'Credits',
      'Credits',
    );

    this.leaderButton = new Button(
      this,
      width,
      height + 150,
      'blueButton1',
      'blueButton2',
      'Top Scores',
      'LeaderBoardScene',
    );

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.3, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(
        width,
        width - offset * 100,
        width * 2,
        height * 2,
      ),
    );
  }

  // eslint-disable-next-line class-methods-use-this
  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(gameText, gameButton);
  }
}
