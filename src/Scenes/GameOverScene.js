import Button from '../Objects/Button';
import API from '../Objects/api';
import Dom from '../../../Phaser3-paralex-bg/src/scenes/dom';
import LocalStorage from '../../../Phaser3-paralex-bg/src/scenes/localStorage';
/* eslint-disable no-undef */
export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  preload() {
    this.load.image('loadingScreen', 'assets/images/logo-bg.png');
    // eslint-disable-next-line no-unused-expressions
    API;
  }

  create() {

    this.input.keyboard.enabled = false;
    this.input.keyboard.preventDefault = false;

    let height = this.scale.height * 0.5
    let width = this.scale.width * 0.5
    this.add.image(width, height, 'loadingScreen').setScale(0.85, 1.13);

    const score = LocalStorage.readLocalStorage();
    LocalStorage.clearLocalStorage();

    this.title = this.add.text(this.game.width * 0.5, 128, 'GAME OVER', {
      fontSize: 47,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.gameButton = new Button(
      this,
      width / 2,
      height - 100,
      'blueButton1',
      'blueButton2',
      'Play Again',
      'Game',
    );

    this.title = this.add.text(
      this.game.width,
      200,
      `Your score is: ${score}`,
      {
        fontFamily: 'monospace',
        fontSize: 32,
        fontStyle: 'bold',
        color: 'white',
        align: 'center',
      },
    );
    this.title.setOrigin(0.5);

    const div = Dom.createForm();
    this.add.dom(this.game.width * 0.7, 250, div);

    Dom.addButtonFunctionality(score);

    this.submitButton = new Button(
      this,
      width / 2,
      height / 2 + 100,
      'blueButton1',
      'blueButton2',
      'Credits',
      'Credits',
    );
  }
}
