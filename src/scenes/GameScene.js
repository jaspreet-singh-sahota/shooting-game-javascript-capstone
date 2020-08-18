class Laser extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'playerAttack', 30);
  }

  fire(x, y) {
    this.body.reset(x, y);
    this.setActive(true);
    this.setVisible(true);
    this.setVelocityX(700);
  }
}

class LaserGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      frameQuantity: 20,
      key: 'playerAttack',
      active: false,
      visible: false,
      classType: Laser
    });
  }

  fireBullet(x, y) {
    const laser = this.getFirstDead(false);

    if (laser) {
      laser.fire(x, y);
    }
  }
}

var score = 0;
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game-scene')
    this.laserGroup;
  }

  init() {
    this.playerSpeed = 250;
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

    this.load.spritesheet('playerAttack', 'assets/images/playerAttack.png', {
      frameWidth: 50,
      frameHeight: 50,
      margin: 15,
      spacing: 5,
    });

    this.load.spritesheet('enemy', 'assets/images/enemy.png', {
      frameWidth: 125,
      frameHeight: 110.33,
      margin: 0,
      spacing: 0,
    });

    this.load.spritesheet('enemyAttack', 'assets/images/enemy.png', {
      frameWidth: 65,
      frameHeight: 110.33,
      margin: -10,
      spacing: 12,
    });

    this.load.spritesheet('star', 'assets/images/star.png', {
      frameWidth: 70,
      frameHeight: 69,
      margin: 0,
      spacing: 0,
    });
  }

  backgroundRepeat(scene, w, h, text, speed, s1, s2, o1, o2, player) {
    const count = 101 * speed
    let screenWidth = 0;
    const platforms = scene.physics.add.staticGroup();

    for (let i = 0; i < count; i++) {
      let repeatImage = platforms.create((w + screenWidth), h, text).setOrigin(o1, o2).setScrollFactor(speed).setScale(s1, s2)

      if (text === "ground2") {
        scene.physics.add.collider(player, repeatImage);
      }
      screenWidth += scene.scale.width
    }
  }

  collectStar(player, star) {
    star.disableBody(true, true);

    score += 10;
    this.scoreText.setText('Score: ' + score);
  }

  disableEnemyAttack(player, enemy) {
    enemy.setActive(false)
    enemy.disableBody(true, true);
    enemy.setVisible(false)
    player.destroy()
  }

  gameOver() {
    console.log('gameover')
  }

  create() {
    this.height = this.scale.height
    this.width = this.scale.width
    this.timer = true

    this.add.image(this.width * 0.5, this.height * 0.3, 'sky')
      .setScrollFactor(0).setScale(0.8, 0.7)

    this.cloud1 = this.backgroundRepeat(this, 0, this.height * 0.45, 'cloud1', 0.07, 0.5, 0.5, 0, 1)
    this.mountain = this.backgroundRepeat(this, 0, this.height, 'mountain', 0.25, 0.5, 0.5, 0, 1)
    this.cloud2 = this.backgroundRepeat(this, this.width / 2, this.height * 0.5, 'cloud2', 0.15, 0.5, 0.5, 0, 1)
    this.grass2 = this.backgroundRepeat(this, this.width / 2.4, this.height / 1.5, 'grass2', 0.5, 0.4, 0.4)
    this.grass1 = this.backgroundRepeat(this, this.width / 7.5, this.height / 1.5, 'grass3', 0.5, 0.4, 0.4)
    this.grass3 = this.backgroundRepeat(this, this.width / 1.3, this.height / 1.5, 'grass1', 0.5, 0.4, 0.4)
    this.ground = this.backgroundRepeat(this, 0, this.height / 1.1, 'ground', 0.75, 0.5, 0.5, 0, 1)

    this.tree1 = this.backgroundRepeat(this, this.width / 5, this.height / 1.8, 'tree', 0.75, 0.5, 0.5)
    this.tree2 = this.backgroundRepeat(this, this.width / 1.3, this.height / 1.6, 'tree', 0.75, 0.35, 0.35)
    this.rock1 = this.backgroundRepeat(this, this.width / 1.8, this.height / 1.3, 'rock2', 0.75, 0.4, 0.4)
    this.rock2 = this.backgroundRepeat(this, this.width / 3.5, this.height / 1.3, 'rock3', 0.75, 0.4, 0.4)
    this.rock3 = this.backgroundRepeat(this, this.width / 1.1, this.height / 1.3, 'rock1', 0.75, 0.4, 0.4)
    this.flower2 = this.backgroundRepeat(this, this.width / 2.5, this.height / 1.3, 'flower2', 0.75, 0.4, 0.4)
    this.player = this.physics.add.sprite(this.width * 0.1, this.height * 0.4, 'player', 3).setScale(1.3, 1.3);
    this.player.setBounce(0.2);
    this.flower1 = this.backgroundRepeat(this, this.width / 1.7, this.height / 1.2, 'flower1', 0.75, 0.4, 0.4)

    function randomInteger(min, max) {
      return Math.random() * (max - min) + min;
    }

    this.coins = []

    for (let i = 0; i < 4; i++) {
      this.coins.push(this.physics.add.staticGroup({
        key: 'star',
        repeat: 100,
        setXY: { x: this.width * Math.random(1), y: this.height * randomInteger(0.5, 0.8), stepX: randomInteger(100, 1000) },
        setScale: { x: 0.5, y: 0.5 }
      }))
    }

    this.backgroundRepeat(this, 0, this.height, 'ground2', 1.25, 0.45, 0.45, 0, 1, this.player)
    let enemySpawnPosition = 0
    for (let i = 0; i < 34; i++) {
      this.enemy = this.physics.add.sprite(enemySpawnPosition + this.width * 0.9, this.height * 0.4, 'enemy', 10).setScale(1.3, 1.3)
      this.enemy.flipX = true;
      console.log(enemySpawnPosition)
      this.backgroundRepeat(this, 0, this.height, 'ground2', 1.25, 0.45, 0.45, 0, 1, this.enemy)
      enemySpawnPosition += this.width * 3

    }

    if (!this.anims.get('walking')) {
      this.anims.create({
        key: 'walking',
        frames: this.anims.generateFrameNames('player', {
          frames: [30, 31, 32, 33, 34, 35, 32, 33, 34, 35, 32, 33, 34, 35, 32, 33, 34, 35]
        }),
        frameRate: 12,
        yoyo: true,
        repeat: -1
      });
    }

    if (!this.anims.get('spin')) {
      this.anims.create({
        key: 'spin',
        frames: this.anims.generateFrameNames('star', {
          frames: [0, 1, 2, 3, 4, 5, 6, 7]
        }),
        frameRate: 5,
        repeat: -1
      });
    }

    if (!this.anims.get('enemy')) {
      this.anims.create({
        key: 'enemy',
        frames: this.anims.generateFrameNames('enemy', {
          frames: [8, 9, 10]
        }),
        frameRate: 2,
        repeat: -1
      });
    }

    this.enemy.anims.play('enemy')

    for (let i = 0; i < this.coins.length; i++) {
      Phaser.Actions.Call(this.coins[i].getChildren(), child => {
        child.anims.play('spin');
      });
    }

    this.enemyAttack()
    this.laserGroup = new LaserGroup(this);

    Phaser.Actions.Call(this.laserGroup.getChildren(), child => {
      this.backgroundRepeat(this, 0, this.height, 'ground2', 1.25, 0.45, 0.45, 0, 1, child)
      this.physics.add.overlap(child, [this.enemy, this.enemyAttack], this.disableEnemyAttack, null, this)
    });

    this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' }).setScrollFactor(0);
    this.physics.add.collider(this.player, this.ground2, this.ground, this.enemyAttack);
    this.physics.add.overlap(this.player, [this.coins[0], this.coins[1], this.coins[2], this.coins[3]], this.collectStar, null, this)
    this.physics.add.overlap(this.player, [this.enemy, this.enemyAttack], this.gameOver, null, this)
    this.cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setBounds(0, 0, this.width * 100, this.height)
    this.cameras.main.startFollow(this.player);
  }

  enemyAttack() {
    this.enemyAttack = this.physics.add.group({
      allowGravity: false,
      immovable: true
    });

    let spawningAttacks = this.time.addEvent({
      delay: 3000,
      loop: true,
      callbackScope: this,
      callback: function () {
        if (this.enemy.visible === true) {
          let attack = this.enemyAttack.create(this.width * 0.9, 1000 * 0.44, 'enemyAttack', 17);
          attack.flipX = true
          attack.setVelocityX(-300);
          this.time.addEvent({
            delay: 1800,
            repeat: 0,
            callbackScope: this,
            callback: function () {
              attack.destroy();
            }
          });
        }
      }
    });
  };

  attackInterval() {
    this.timer = false
    this.time.addEvent({
      delay: 10,
      repeat: 0,
      callbackScope: this,
      callback: function () {
        Phaser.Actions.Call(this.laserGroup.getChildren(), child => {
          child.active = false
          child.a
        });
      }
    });
    setTimeout(() => {
      this.timer = true
    }, 950);
  }

  update() {
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
      if (onGround)
        this.player.setFrame(10);
    }

    if (onGround && (this.cursors.space.isDown || this.cursors.up.isDown)) {
      this.player.anims.stop('walking');
      this.player.body.setVelocityY(-400);
      this.player.setFrame(42);
    }

    this.keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

    if (this.keyX.isDown && this.player.flipX === true) {
      if (this.timer) {
        this.laserGroup.fireBullet(this.player.x - 50, this.player.y + 10);
        this.laserGroup.setVelocityX(-700)
        this.attackInterval()
      }
    }

    if (this.keyX.isDown && this.player.flipX !== true) {
      if (this.timer) {
        this.laserGroup.fireBullet(this.player.x + 50, this.player.y + 10);
        this.attackInterval()
      }
    }
  }

}