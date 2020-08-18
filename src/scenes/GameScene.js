const backgroundRepeat = (scene, w, h, text, speed, s1, s2, o1, o2, player) => {
  const count = 101 * speed
  let screenWidth = 0;
  const platforms = scene.physics.add.staticGroup();

  for (let i = 0; i < count; i++) {
    const repeatImage = platforms.create((w + screenWidth), h, text).setOrigin(o1, o2).setScrollFactor(speed).setScale(s1, s2)
    screenWidth += scene.scale.width
    if (text === "ground2") {
      scene.physics.add.collider(player, repeatImage);
    }
  }
}

export default class ParallaxScene extends Phaser.Scene {
  constructor() {
    super('parallax-scene')
  }

  init() {
    this.playerSpeed = 150;
    this.jumpSpeed = -600;
  };

  preload() {
    this.load.image('sky', 'assets/images/sky.png');
    this.load.image('mountain', 'assets/images/mountain.png');
    this.load.image('grass1', 'assets/images/grass1.png');
    this.load.image('grass2', 'assets/images/grass2.png');
    this.load.image('grass3', 'assets/images/grass3.png');
    this.load.image('ground', 'assets/images/ground.png');
    this.load.image('tree', 'assets/images/tree.png');
    this.load.image('cloud1', 'assets/images/cloud1.png');
    this.load.image('cloud2', 'assets/images/cloud2.png');
    this.load.image('cloud3', 'assets/images/cloud3.png');
    this.load.image('rock1', 'assets/images/rock1.png');
    this.load.image('rock2', 'assets/images/rock2.png');
    this.load.image('rock3', 'assets/images/rock3.png');
    this.load.image('flower1', 'assets/images/flower1.png');
    this.load.image('flower2', 'assets/images/flower2.png');
    this.load.image('ground2', 'assets/images/ground2.png');

    this.load.spritesheet('player', 'assets/images/player.png', {
      frameWidth: 50.5,
      frameHeight: 52,
      margin: 2,
      spacing: 2,
    });
  }

  create() {
    const height = this.scale.height
    const width = this.scale.width

    this.add.image(width * 0.5, height * 0.3, 'sky')
      .setScrollFactor(0).setScale(0.8, 0.7)

    this.cloud1 = backgroundRepeat(this, 0, height * 0.45, 'cloud1', 0.07, 0.5, 0.5, 0, 1)
    this.mountain = backgroundRepeat(this, 0, height, 'mountain', 0.25, 0.5, 0.5, 0, 1)
    this.cloud2 = backgroundRepeat(this, width / 2, height * 0.5, 'cloud2', 0.15, 0.5, 0.5, 0, 1)
    this.grass2 = backgroundRepeat(this, width / 2.4, height / 1.5, 'grass2', 0.5, 0.4, 0.4)
    this.grass1 = backgroundRepeat(this, width / 7.5, height / 1.5, 'grass3', 0.5, 0.4, 0.4)
    this.grass3 = backgroundRepeat(this, width / 1.3, height / 1.5, 'grass1', 0.5, 0.4, 0.4)
    this.ground = backgroundRepeat(this, 0, height / 1.1, 'ground', 0.75, 0.5, 0.5, 0, 1)

    this.tree1 = backgroundRepeat(this, width / 5, height / 1.8, 'tree', 0.75, 0.5, 0.5)
    this.tree2 = backgroundRepeat(this, width / 1.3, height / 1.6, 'tree', 0.75, 0.35, 0.35)
    this.rock1 = backgroundRepeat(this, width / 1.8, height / 1.3, 'rock2', 0.75, 0.4, 0.4)
    this.rock2 = backgroundRepeat(this, width / 3.5, height / 1.3, 'rock3', 0.75, 0.4, 0.4)
    this.rock3 = backgroundRepeat(this, width / 1.1, height / 1.3, 'rock1', 0.75, 0.4, 0.4)
    this.flower1 = backgroundRepeat(this, width / 1.7, height / 1.2, 'flower1', 0.75, 0.4, 0.4)

    this.player = this.add.sprite(1000 * 0.1, 700 * 0.45, 'player', 3).setScale(1.5, 1.5)
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player);
    


    this.flower2 = backgroundRepeat(this, width / 2.5, height / 1.3, 'flower2', 0.75, 0.4, 0.4)
    this.ground2 = backgroundRepeat(this, 0, height, 'ground2', 1.25, 0.45, 0.45, 0, 1, this.player)
    // this.physics.add.overlap(this.player, [this.ground2], null, this);

    if (!this.anims.get('walking')) {
      // walking animation
      this.anims.create({
        key: 'walking',
        frames: this.anims.generateFrameNames('player', {
          frames: [30, 31, 32, 33, 34, 35]
        }),
        frameRate: 12,
        yoyo: true,
        repeat: -1
      });
    }

    this.cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.setBounds(0, 0, width * 100, height)
  }

  update() {
    const speed = 10
    const cam = this.cameras.main

    let onGround = this.player.body.blocked.down || this.player.body.touching.down;

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-this.playerSpeed);
      this.player.flipX = true;
      if (onGround && !this.player.anims.isPlaying)
        this.player.anims.play('walking');
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(this.playerSpeed);
      this.player.flipX = false;
      if (onGround && !this.player.anims.isPlaying)
        this.player.anims.play('walking');
    } else {
      this.player.body.setVelocityX(0);
      this.player.setFrame(10);
    }

    if (onGround && (this.cursors.space.isDown || this.cursors.up.isDown)) {
      this.player.body.setVelocityY(-400);
      this.player.anims.stop('walking');
      this.player.setFrame(42);
    }

  }

}