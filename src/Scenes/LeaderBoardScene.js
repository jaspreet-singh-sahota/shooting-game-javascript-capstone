import 'phaser';
import API from '../Objects/api';
import Button from '../Objects/Button';
/* eslint-disable no-undef */
export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoardScene');
  }

  preload() {
    this.load.image('leaderBoardBackGround', 'assets/images/score.png');
  }

  async create() {
    const height = this.scale.height * 0.5;
    const width = this.scale.width * 0.5;
    this.add.image(width, height, 'leaderBoardBackGround').setScale(1, 0.9);
    API.getScores().then((response) => {
      const sortedResponse = response.result.sort((a, b) => b.score - a.score);
      let namesToDisplay = '';

      for (let i = 0; i < 7; i += 1) {
        namesToDisplay += `${i + 1}. ${sortedResponse[i].user}: ${
          sortedResponse[i].score
        }\n\n`;
        if (i === sortedResponse.length - 1) {
          break;
        }
      }

      this.creditsText = this.add.text(0, 0, 'Top Scores', {
        fontSize: '36px',
        fill: 'white',
      });
      this.madeByText = this.add.text(0, 0, namesToDisplay, {
        fontSize: '26px',
        fill: 'white',
      });
      this.zone = this.add.zone(
        width,
        height,
        width * 2,
        height * 2,
      );
      Phaser.Display.Align.In.Center(this.creditsText, this.zone);
      Phaser.Display.Align.In.Center(this.madeByText, this.zone);

      this.creditsText.setY(20);
      this.madeByText.setY(80);
    });

    this.titleButton = new Button(
      this,
      width,
      height + 200,
      'blueButton1',
      'blueButton2',
      'Back',
      'Title',
    );
  }
}
