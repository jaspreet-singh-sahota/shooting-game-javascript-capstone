import 'phaser';

// eslint-disable-next-line no-undef
export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key1, key2, text, targetScene) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.button = this.scene.add.sprite(0, 0, key1).setInteractive().setScale(1.2, 1);
    this.text = this.scene.add.text(0, 0, text, {
      fontSize: '32px',
      fill: '#fff',
    });
    // eslint-disable-next-line no-undef
    Phaser.Display.Align.In.Center(this.text, this.button);

    this.add(this.button);
    this.add(this.text);

    this.button.on('pointerdown', () => {
      const form = document.querySelectorAll('.form');
      if (form) {
        form.forEach(child => { child.style.display = 'none'; });
      }
      this.scene.scene.start(targetScene);
    });

    this.button.on('pointerover', () => {
      this.button.setTexture(key2);
    });

    this.button.on('pointerout', () => {
      this.button.setTexture(key1);
    });

    this.scene.add.existing(this);
  }
}
