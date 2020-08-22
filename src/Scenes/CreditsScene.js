import 'phaser';
import Button from '../Objects/Button';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  preload() {
    this.load.image('creditBackground', '../../assets/images/options.png');
  }

  create() {
    const height = this.scale.height * 0.5
    const width = this.scale.width * 0.5
    this.add.image(width, height, 'creditBackground').setScale(0.35, 0.277)
    this.creditsText = this.add.text(0, 0, 'Credits', {
      fontSize: '32px',
      fill: '#fff',
    });
    this.madeByText = this.add.text(0, 0, 'Created By: Jaspreet singh', {
      fontSize: '30px',
      fill: '#fff',
      fontStyle: 'bold',
    });
    this.zone = this.add.zone(
      width,
      height,
      width * 2,
      height * 2,
    );

    this.titleButton = new Button(
      this,
      width,
      1000,
      'blueButton1',
      'blueButton2',
      'Back',
      'Title',
    );
    Phaser.Display.Align.In.Center(this.creditsText, this.zone);
    Phaser.Display.Align.In.Center(this.madeByText, this.zone);

    this.madeByText.setY(1000);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this),
    });

    this.madeByTween = this.tweens.add({
      targets: this.titleButton,
      y: 250,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete() {},
    });
  }
}
