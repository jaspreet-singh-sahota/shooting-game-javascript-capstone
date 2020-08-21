import 'phaser';
// eslint-disable-next-line no-undef
export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    const width = this.scale.width * 0.5;
    const height = this.scale.height * 0.5;
    this.logo = this.add.sprite(width, height, 'logo', 0).setScale(1.61, 2.17);
    this.load.image('blueButton1', 'assets/ui/blue_button02.png');
    this.load.image('blueButton2', 'assets/ui/blue_button03.png');
    this.load.image('box', 'assets/ui/grey_box.png');
    this.load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png');
    this.load.audio('bgMusic', 'assets/titleTheme.mp3');

    if (!this.anims.get('logo')) {
      this.anims.create({
        key: 'logo',
        frames: this.anims.generateFrameNames('logo', {
          frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            14, 15, 16, 17, 18, 19, 20, 21, 22],
        }),
        frameRate: 7.5,
        repeat: -1,
      });
    }

    this.logo.anims.play('logo');

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(width / 1.78, 270, 320, 50);
    const loadingText = this.make.text({
      x: width,
      y: height - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: 'white',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width - 25,
      y: height - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: 'white',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width,
      y: height + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: 'white',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(width / 1.7, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(2850, this.ready, [], this);
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}
