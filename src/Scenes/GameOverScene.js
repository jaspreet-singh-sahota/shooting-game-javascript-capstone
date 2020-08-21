import Button from '../Objects/Button';
import API from '../Objects/api';
import Dom from '../Objects/dom';
import LocalStorage from '../Objects/localStorage';
/* eslint-disable no-undef */
export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  preload() {
    this.load.image('loadingScreenImgRight', 'assets/images/gameover1.png');
    this.load.image('loadingScreenImgLeft', 'assets/images/gameover2.png');
    // eslint-disable-next-line no-unused-expressions
    API;
  }

  create() {
    this.input.keyboard.enabled = false;
    this.input.keyboard.preventDefault = false;

    const height = this.scale.height * 0.5;
    const width = this.scale.width * 0.5;
    this.add.image(width * 1.7, height, 'loadingScreenImgRight').setScale(0.15, 0.2);
    this.add.image(width * 0.3, height, 'loadingScreenImgLeft').setScale(0.33, 0.5);

    const score = LocalStorage.readLocalStorage();
    LocalStorage.clearLocalStorage();

    this.title = this.add.text(width, 128, 'GAME OVER', {
      fontSize: 47,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.playAgainButton = new Button(
      this,
      width * 0.5,
      height * 1.8,
      'blueButton1',
      'blueButton2',
      'Play Again',
      'Game',
    );

    this.creditButton = new Button(
      this,
      width * 1.5,
      height * 1.8,
      'blueButton1',
      'blueButton2',
      'Credits',
      'Credits',
    );

    this.title = this.add.text(
      width,
      200,
      `Your score is: ${score}`,
      {
        fontSize: 32,
        fontStyle: 'bold',
        color: 'white',
        align: 'center',
      },
    );
    this.title.setOrigin(0.5);

    Dom.form();
    Dom.addButtonFunctionality(score);
  }
}
