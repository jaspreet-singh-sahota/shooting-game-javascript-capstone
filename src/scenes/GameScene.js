export default class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene')
  }

  preload() {
    this.load.image('sky', 'assets/images/sky.png');
    this.load.image('mountain', 'assets/images/mountain.png');
    this.load.image('grass1', 'assets/images/grass1.png');
    this.load.image('grass2', 'assets/images/grass2.png');
    this.load.image('grass3', 'assets/images/grass3.png');
    this.load.image('ground', 'assets/images/ground.png');
    this.load.image('tree', 'assets/images/tree.png');
    this.load.image('rock1', 'assets/images/rock1.png');
    this.load.image('rock2', 'assets/images/rock2.png');
    this.load.image('rock3', 'assets/images/rock3.png');
    this.load.image('flower1', 'assets/images/flower1.png');
    this.load.image('flower2', 'assets/images/flower2.png');
    this.load.image('ground2', 'assets/images/ground2.png');

  }

  create() {
    const height = this.scale.height
    const width = this.scale.width

    this.add.image(width * 0.5, height * 0.5, 'sky')

    this.mountain = this.add.image(0, height, 'mountain').setOrigin(0, 1)
    this.mountain.setScale(0.5, 0.5)

    this.grass2 = this.add.image(width / 2.4, height / 1.5, 'grass2')
    this.grass2.setScale(0.4, 0.4)

    this.grass1 = this.add.image(width / 7.5, height / 1.5, 'grass3')
    this.grass1.setScale(0.4, 0.4)

    this.grass3 = this.add.image(width / 1.3, height / 1.5, 'grass1')
    this.grass3.setScale(0.4, 0.4)

    this.ground = this.add.image(0, height / 1.1, 'ground').setOrigin(0, 1)
    this.ground.setScale(0.5, 0.5)

    this.tree1 = this.add.image(width / 5, height / 1.8, 'tree')
    this.tree1.setScale(0.5, 0.5)

    this.tree2 = this.add.image(width / 1.3, height / 1.6, 'tree')
    this.tree2.setScale(0.35, 0.35)

    this.rock1 = this.add.image(width / 1.8, height / 1.3, 'rock2')
    this.rock1.setScale(0.4, 0.4)

    this.rock2 = this.add.image(width / 3.5, height / 1.3, 'rock3')
    this.rock2.setScale(0.4, 0.4)

    this.rock3 = this.add.image(width / 1.1, height / 1.3, 'rock1')
    this.rock3.setScale(0.4, 0.4)

    this.flower1 = this.add.image(width / 1.7, height / 1.2, 'flower1')
    this.flower1.setScale(0.4, 0.4)

    this.flower2 = this.add.image(width / 2.5, height / 1.3, 'flower2')
    this.flower2.setScale(0.4, 0.4)

    this.ground2 = this.add.image(0, height, 'ground2').setOrigin(0, 1)
    this.ground2.setScale(0.45, 0.45)
    
  }

  update() {
    
    if (this.cursors.left.isDown) {
      cam.scrollX -= speed
    }
    else if (this.cursors.right.isDown) {
      cam.scrollX += speed
    }
  }

}

