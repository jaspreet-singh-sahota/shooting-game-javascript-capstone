import 'phaser';
import Button from '../Objects/Button';

// eslint-disable-next-line no-undef
export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  preload() {
    this.load.image('optionBackground', 'assets/images/options.png');
  }

  create() {
    let height = this.scale.height * 0.5
    let width = this.scale.width * 0.5
    this.add.image(width, height, 'optionBackground').setScale(0.3, 0.277)
    this.model = this.sys.game.globals.model;
    width = this.scale.width * 0.3
    height = this.scale.height

    this.text = this.add.text(width + 58, 100, 'Options', { fontSize: 40 });
    this.musicButton = this.add.image(width, 200, 'checkedBox');
    this.musicText = this.add.text(width + 50, 190, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(width, 300, 'checkedBox');
    this.soundText = this.add.text(width + 50, 290, 'Sound Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    this.soundButton.on('pointerdown', () => {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    });

    this.menuButton = new Button(
      this,
      width + 140,
      height * 0.7,
      'blueButton1',
      'blueButton2',
      'Menu',
      'Title',
    );

    this.updateAudio();
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('box');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkedBox');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }

    if (this.model.soundOn === false) {
      this.soundButton.setTexture('box');
    } else {
      this.soundButton.setTexture('checkedBox');
    }
  }
}
