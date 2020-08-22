import LocalStorage from '../Objects/localStorage';
import EnemyGroup from '../helper/enemyGroup';
import EnemyAttackGroup from '../helper/enemyAttackGroup';
import LaserGroup from '../helper/playerAttackGroup';
import playerAttack from '../../assets/images/playerAttack.png';
import player from '../../assets/images/player.png';
import test from '../../assets/images/test.png';
import enemy from '../../assets/images/enemy.png';
import star from '../../assets/images/star.png';
import ground2 from '../../assets/images/ground2.png';
import flower2 from '../../assets/images/flower2.png';
import flower1 from '../../assets/images/flower1.png';
import rock3 from '../../assets/images/rock3.png';
import rock2 from '../../assets/images/rock2.png';
import rock1 from '../../assets/images/rock1.png';
import cloud3 from '../../assets/images/cloud3.png';
import cloud2 from '../../assets/images/cloud2.png';
import cloud1 from '../../assets/images/cloud1.png';
import tree from '../../assets/images/tree.png';
import ground from '../../assets/images/ground.png';
import grass3 from '../../assets/images/grass3.png';
import grass2 from '../../assets/images/grass2.png';
import grass1 from '../../assets/images/grass1.png';
import mountain from '../../assets/images/mountain.png';
import sky from '../../assets/images/sky.png';

// eslint-disable-next-line no-undef
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.score = 0;
    this.playerSpeed = 290;
    this.jumpSpeed = -600;
    this.height = this.scale.height;
    this.width = this.scale.width;
  }

  preload() {
    this.load.image('sky', sky);
    this.load.image('mountain', mountain);
    this.load.image('grass1', grass1);
    this.load.image('grass2', grass2);
    this.load.image('grass3', grass3);
    this.load.image('ground', ground);
    this.load.image('tree', tree);
    this.load.image('cloud1', cloud1);
    this.load.image('cloud2', cloud2);
    this.load.image('cloud3', cloud3);
    this.load.image('rock1', rock1);
    this.load.image('rock2', rock2);
    this.load.image('rock3', rock3);
    this.load.image('flower1', flower1);
    this.load.image('flower2', flower2);
    this.load.image('ground2', ground2);
    this.load.spritesheet('star', star, { frameWidth: 70, frameHeight: 69 });
    this.load.spritesheet('enemy', enemy, { frameWidth: 125, frameHeight: 110.33 });
    this.load.spritesheet('enemyAttack', test, { frameWidth: 110, frameHeight: 160 });

    this.load.spritesheet('player', player, {
      frameWidth: 50.5,
      frameHeight: 52,
      margin: 2,
      spacing: 2,
    });

    this.load.spritesheet('playerAttack', playerAttack, {
      frameWidth: 50,
      frameHeight: 50,
      margin: 15,
      spacing: 5,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  backgroundRepeat(scene, w, h, text, speed, s1, s2, o1, o2, player) {
    const count = 92 * speed;
    let screenWidth = 0;
    const platforms = scene.physics.add.staticGroup();

    for (let i = 0; i < count; i += 1) {
      const repeatImage = platforms.create(
        (w + screenWidth), h, text,
      ).setOrigin(o1, o2).setScrollFactor(speed).setScale(s1, s2);

      if (text === 'ground2') {
        scene.physics.add.collider(player, repeatImage);
      }
      screenWidth += scene.scale.width;
    }
  }

  collectStar(player, star) {
    this.score += 10;
    this.scoreText.setText(`Score: ${this.score}`);
    LocalStorage.saveLocalStorage(this.score);
    star.disableBody(true, true);
  }

  // eslint-disable-next-line class-methods-use-this
  disableEnemyAttack(player, enemy) {
    enemy.setActive(false);
    enemy.body.enable = false;
    enemy.setVisible(false);
    player.setActive(false);
    player.setVisible(false);
    player.body.enable = false;
  }

  gameOver() {
    this.scene.stop();
    this.scene.start('GameOverScene');
  }

  // eslint-disable-next-line class-methods-use-this
  randomInteger(min, max) {
    return Math.random() * (max - min) + min;
  }

  generateCoins() {
    for (let i = 0; i < 4; i += 1) {
      this.coins.push(this.physics.add.staticGroup({
        key: 'star',
        repeat: 100,
        setXY: {
          x: this.width * Math.random(1),
          y: this.height * this.randomInteger(0.5, 0.8),
          stepX: this.randomInteger(300, 1000),
        },
        setScale: { x: 0.5, y: 0.5 },
      }));
    }
  }

  coinAnimation(coins) {
    if (!this.anims.get('spin')) {
      this.anims.create({
        key: 'spin',
        frames: this.anims.generateFrameNames('star', {
          frames: [0, 1, 2, 3, 4, 5, 6, 7],
        }),
        frameRate: 5,
        repeat: -1,
      });
    }

    for (let i = 0; i < coins.length; i += 1) {
      // eslint-disable-next-line no-undef
      Phaser.Actions.Call(coins[i].getChildren(), child => {
        child.anims.play('spin');
      });
    }
  }

  createEnemies(enemyGroup, player) {
    let enemySpawnPosition = 0;
    for (let i = 0; i < 30; i += 1) {
      enemyGroup.createEnemy(3000 + enemySpawnPosition, this.height * 0.5);
      this.enemyAttackPosition(3000 + enemySpawnPosition, this.height * 0.753, player, this);
      enemySpawnPosition += this.width * 3.2;
    }
  }

  checkOverlap(laserGroup, enemyGroup, player, enemyAttackGroup, scene) {
    // eslint-disable-next-line no-undef
    Phaser.Actions.Call(laserGroup.getChildren(), laserChild => {
      scene.backgroundRepeat(scene, 0, this.height, 'ground2', 1.25, 0.45, 0.45, 0, 1, laserChild);
      // eslint-disable-next-line no-undef
      Phaser.Actions.Call(enemyGroup.getChildren(), enemyChild => {
        scene.backgroundRepeat(scene, this.width * 0.5, this.height, 'ground2', 1.25, 0.45, 0.45, 0, 1, enemyChild);
        scene.physics.add.overlap(laserChild, [enemyChild], scene.disableEnemyAttack, null, scene);
        scene.physics.add.overlap(player, [enemyChild], scene.gameOver, null, scene);
      });
    });
    // eslint-disable-next-line no-undef
    Phaser.Actions.Call(laserGroup.getChildren(), laserChild => {
      // eslint-disable-next-line no-undef
      Phaser.Actions.Call(enemyAttackGroup.getChildren(), enemyAttackChild => {
        scene.physics.add.overlap(laserChild, [enemyAttackChild],
          scene.disableEnemyAttack, null, scene);
      });
    });
  }

  create() {
    this.timer = true;
    this.add.image(this.width * 0.5, this.height * 0.3, 'sky').setScrollFactor(0).setScale(0.8, 0.7);
    this.backgroundRepeat(this, 0, this.height * 0.45, 'cloud1', 0.07, 0.5, 0.5, 0, 1);
    this.backgroundRepeat(this, 0, this.height, 'mountain', 0.25, 0.5, 0.5, 0, 1);
    this.backgroundRepeat(this, this.width / 2, this.height * 0.5, 'cloud2', 0.15, 0.5, 0.5, 0, 1);
    this.backgroundRepeat(this, this.width / 2.4, this.height / 1.5, 'grass2', 0.5, 0.4, 0.4);
    this.backgroundRepeat(this, this.width / 7.5, this.height / 1.5, 'grass3', 0.5, 0.4, 0.4);
    this.backgroundRepeat(this, this.width / 1.3, this.height / 1.5, 'grass1', 0.5, 0.4, 0.4);
    this.backgroundRepeat(this, 0, this.height / 1.1, 'ground', 0.75, 0.5, 0.5, 0, 1);
    this.backgroundRepeat(this, this.width / 5, this.height / 1.8, 'tree', 0.75, 0.5, 0.5);
    this.backgroundRepeat(this, this.width / 1.3, this.height / 1.6, 'tree', 0.75, 0.35, 0.35);
    this.backgroundRepeat(this, this.width / 1.8, this.height / 1.3, 'rock2', 0.75, 0.4, 0.4);
    this.backgroundRepeat(this, this.width / 3.5, this.height / 1.3, 'rock3', 0.75, 0.4, 0.4);
    this.backgroundRepeat(this, this.width / 1.1, this.height / 1.3, 'rock1', 0.75, 0.4, 0.4);
    this.backgroundRepeat(this, this.width / 2.5, this.height / 1.3, 'flower2', 0.75, 0.4, 0.4);
    this.player = this.physics.add.sprite(this.width * 0.1, this.height * 0.4, 'player', 3).setScale(1.3, 1.3);
    this.player.setBounce(0.2);
    this.backgroundRepeat(this, this.width / 1.7, this.height / 1.2, 'flower1', 0.75, 0.4, 0.4);
    this.backgroundRepeat(this, 0, this.height, 'ground2', 1.25, 0.45, 0.45, 0, 1, this.player);
    this.coins = [];

    this.generateCoins();
    this.coinAnimation(this.coins);

    if (!this.anims.get('walking')) {
      this.anims.create({
        key: 'walking',
        frames: this.anims.generateFrameNames('player', {
          frames: [30, 31, 32, 33, 34, 35, 32, 33, 34, 35, 32, 33, 34, 35, 32, 33, 34, 35],
        }),
        frameRate: 12,
        yoyo: true,
        repeat: -1,
      });
    }

    if (!this.anims.get('enemy')) {
      this.anims.create({
        key: 'enemy',
        frames: this.anims.generateFrameNames('enemy', {
          frames: [8, 9, 10],
        }),
        frameRate: 2,
        repeat: -1,
      });
    }

    this.laserGroup = new LaserGroup(this);
    this.enemyGroup = new EnemyGroup(this);
    this.enemyAttackGroup = new EnemyAttackGroup(this);
    this.enemySpawnPosition = 0;

    this.createEnemies(this.enemyGroup, this.player);
    this.checkOverlap(this.laserGroup, this.enemyGroup, this.player, this.enemyAttackGroup, this);

    this.scoreText = this.add.text(16, 16, 'score: 0',
      { fontSize: '32px', fill: '#000' }).setScrollFactor(0);
    this.physics.add.overlap(this.player,
      [this.coins[0], this.coins[1], this.coins[2], this.coins[3]],
      this.collectStar, null, this);
    this.cursors = this.input.keyboard.createCursorKeys();
    // eslint-disable-next-line no-undef
    this.keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

    this.cameras.main.setBounds(0, 0, this.width * 90, this.height);
    this.cameras.main.startFollow(this.player);
  }

  enemyAttackPosition(x, y, player, scenes) {
    this.time.addEvent({
      delay: 8000,
      loop: true,
      callback: () => {
        const attack = scenes.physics.add.sprite(x, y, 'enemyAttack', 0).setScale(0.6, 0.6);
        attack.setVelocityX(-300);
        attack.body.allowGravity = false;
        scenes.physics.add.overlap(player, [attack], scenes.gameOver, null, scenes);
        // eslint-disable-next-line no-undef
        Phaser.Actions.Call(this.laserGroup.getChildren(), playerAttack => {
          scenes.physics.add.overlap(playerAttack,
            [attack], scenes.disableEnemyAttack, null, scenes);
        });
      },
    });
  }

  attackInterval() {
    this.timer = false;
    this.time.addEvent({
      delay: 10,
      repeat: 0,
      callbackScope: this,
      callback() {
        // eslint-disable-next-line no-undef
        Phaser.Actions.Call(this.laserGroup.getChildren(), child => {
          child.active = false;
          this.time.addEvent({
            delay: 500,
            repeat: 0,
            callbackScope: this,
            callback() {
              this.timer = true;
              child.disableBody(true, true);
            },
          });
        });
      },
    });
  }

  update() {
    const onGround = this.player.body.blocked.down || this.player.body.touching.down;

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-this.playerSpeed);
      this.player.flipX = true;
      if (onGround && !this.player.anims.isPlaying) this.player.anims.play('walking');
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(this.playerSpeed);
      this.player.flipX = false;
      if (onGround && !this.player.anims.isPlaying) this.player.anims.play('walking');
    } else {
      this.player.body.setVelocityX(0);
      if (onGround) this.player.setFrame(10);
    }

    if (onGround && (this.cursors.space.isDown || this.cursors.up.isDown)) {
      this.player.anims.stop('walking');
      this.player.body.setVelocityY(-400);
      this.player.setFrame(42);
    }

    if (this.keyX.isDown && this.player.flipX === true) {
      if (this.timer) {
        this.laserGroup.fireBullet(this.player.x - 50, this.player.y + 10);
        this.laserGroup.setVelocityX(-700);
        this.attackInterval();
      }
    }

    if (this.keyX.isDown && this.player.flipX !== true) {
      if (this.timer) {
        this.laserGroup.fireBullet(this.player.x + 50, this.player.y + 10);
        this.attackInterval();
      }
    }
  }
}