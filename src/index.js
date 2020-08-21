import 'phaser';
import './styles/style.css';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import SceneGameOver from './Scenes/GameOverScene';
import LeaderBoardScene from './Scenes/LeaderBoardScene';
import StoryScene from './Scenes/StoryScene';
import Sound from './Objects/Sound';

// eslint-disable-next-line no-undef
class Game extends Phaser.Game {
  constructor() {
    super(config);
    // const model = new Sound();
    // this.globals = { model, bgMusic: null };
    // this.scene.add('Boot', BootScene);
    // this.scene.add('Preloader', PreloaderScene);
    // this.scene.add('Title', TitleScene);
    // this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    // this.scene.add('LeaderBoardScene', LeaderBoardScene);
    // this.scene.add('Game', GameScene);
    // this.scene.add('SceneGameOver', SceneGameOver);
    // this.scene.add('StoryScene', StoryScene);
    // this.scene.start('Boot');
  }
}

window.game = new Game();
