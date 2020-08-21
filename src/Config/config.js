import 'phaser';

const config = {
  // eslint-disable-next-line no-undef
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 600 },
    },
  },
};

export default config;