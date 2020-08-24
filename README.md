<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->

<br />
<p align="center">
  <a href="git@github.com:jaspreet-singh-sahota/shooting-game-javascript-capstone.git">
    <p align="center"> <img src="https://user-images.githubusercontent.com/55361440/90889552-05eac580-e3d6-11ea-929e-600d7bbedbac.png" alt="Naruto Shooting Game" width="125" height="150"> </p>
  </a>

  <h2 align="center">Naruto Shippuden Shooting Game</h2>
  <h3 align="center"> This project is part of the Microverse curriculum in JavaScript module! </h3>

  <p align="center">
    <a href="https://github.com/jaspreet-singh-sahota/shooting-game-javascript-capstone/issues">Report Bug</a>
    · 
    <a href="https://github.com/jaspreet-singh-sahota/shooting-game-javascript-capstone/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Control's](#CONTROL'S)
* [Live Link](#Live-Link-(Netlify))
* [Game Design](#game-design)
* [Game Play](#game-play)
* [Journey](#Game-development)
* [Built With](#built-with)
* [Future Updates](#future-updates)
* [Contact](#Authors)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

I have built a 2D shooter game inspired by 'Naruto Shippuden' anime. The game is only browser-based, built with Phaser 3. The main character 'Naruto' fights his arch-enemy 'Sasuke'. The objective of the game is to collect as many coins as you can while 'Sasuke' will try his best to stop you.

For each coin you collect +10 points will be added to your score. In the end, you can enter your name on the leaderboard and check the highest scores.

### Standout Feature:-

  - On Game loading Screen, it will play the cut-scene
  - The main menu has 4 options
    - Play button to start the game
    - Options button where the player can enable/disable the background music
    - Credit button where the player can see the contributors to the game
    - Top Scores button where the player can see the leaderBoard

Enjoy playing it and try to break the high score 🔥

<!-- CONTROL'S -->

## How to play

### Control's

- (←) left arrow key => Move left
- (→) right arrow key => Move right
- ( ↑ ) up arrow key or Space bar key => To jump
- ( X ) key => Fire Rasengan

<p align="center"> <img src="https://user-images.githubusercontent.com/55361440/90991712-eb2c7280-e5c8-11ea-9d02-0ee7cbd535a8.gif" alt="Naruto Shooting Game" width="100%"> </p>

<!-- Live Link (Netlify) -->

## Live Link (Netlify)

[Click here to the game play](https://naruto-shippuden-shooting-game.netlify.app/)

<!-- INSTALLATION -->

## Installation

To run 'Naruto Shippuden' locally, clone the repository, navigate to it's containing directory.

#### Follow these commands step by step:-

```bash
git@github.com:jaspreet-singh-sahota/shooting-game-javascript-capstone.git
cd shooting-game-javascript-capstone
npm install
npm start
```

Now it will successfully open 'Naruto Shippuden' locally in your browser.

<!-- BUILD WITH -->

## Built With

- A bit of HTML and CSS for the front end
- Phaser 3
- Webpack
- Eslint
- Stylelint
- Babel
- Jest
- ES6
- NPM
- Github
- [Netlify](https://naruto-shippuden-shooting-game.netlify.app/) for the deployment
- Leaderboard API service

<!-- Game Design -->

## Game Design

The game uses high-quality sprites to bring all scenes to life. User can expect well-designed animations and map textures. I used [this](https://pipoya.itch.io/) sprite pack for animations and for the parallax background effect.

### Naruto

<div>
<div style="width: 200px">
<img style="float:left" width="80" height="100" src="https://user-images.githubusercontent.com/55361440/90889080-1189bc80-e3d5-11ea-839f-21fe36ecf3a1.png">
</div>
- Role: Main Character </br>
- Health: 100 </br>
- Damage: 100 </br>
- Attack: Rasengan </br>

</div>

### Naruto Attack

<div>
<div style="width: 200px">
<img style="float:left" width="80" height="100" src="https://user-images.githubusercontent.com/55361440/90892263-ab079d00-e3da-11ea-83d6-6c8cb1b01ecd.png">
</div>
- Role: Natuto's Attack </br>
- Damage: 100 </br>
- Attack Name: Rasengan </br>

</div>

### enemy

<div>

<div style="width: 200px; display: block; height 100px;">

<img style="float:left" width="80" height="100" src="https://user-images.githubusercontent.com/55361440/90893192-29b10a00-e3dc-11ea-9c16-d875e8249e0e.png">
</div>
- Role: Enemy </br>
- Health: 100 </br>
- Damage: 100 </br>
- Attack: Amatrasu </br>
</div>

</div>

### Enemy's Attack

<div>
<div style="width: 200px">
<img style="float:left" width="80" height="100" src="https://user-images.githubusercontent.com/55361440/90892910-bc04de00-e3db-11ea-919f-87674c585dd8.png">
</div>
- Role: Enemy's attack </br>
- Damage: 100 </br>
- Attack Name: Amatrasu </br>
- AKA: Black flame </br>

</div>

<!-- game play -->

## Game Play 

### Loading Screen

![Peek 2020-08-24 04-05](https://user-images.githubusercontent.com/55361440/90990692-0f845100-e5c1-11ea-8e8d-e68d1ebc1c2d.gif)

### Enable/disable Audio

![Peek 2020-08-24 04-07](https://user-images.githubusercontent.com/55361440/90990696-127f4180-e5c1-11ea-81db-74151190dcb9.gif)

### Credits

![Peek 2020-08-24 04-34](https://user-images.githubusercontent.com/55361440/90990970-317ed300-e5c3-11ea-8028-602bb59937d4.gif)

### Game-Play

<p align="center"> <img src="https://user-images.githubusercontent.com/55361440/90991712-eb2c7280-e5c8-11ea-9d02-0ee7cbd535a8.gif" alt="Naruto Shooting Game" width="100%"> </p>

### form 

![Peek 2020-08-24 04-16](https://user-images.githubusercontent.com/55361440/90990699-21fe8a80-e5c1-11ea-8f95-b46d959a0d42.gif)

### Leaderboard 

![Peek 2020-08-24 04-14](https://user-images.githubusercontent.com/55361440/90990698-1f039a00-e5c1-11ea-9fb8-52510e350eea.gif)

<!-- Game development -->

## Game development

| DAYS  |              OBJECTIVE               |                                                                                                                                                                                  DESCRIPTION                                                                                                                                                                                   |                                                                                                                                 OUTCOME                                                                                                                                  | STATUS  |
| :---- | :----------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| Day 1 |        Game Design         |                                                                                                                 I read the requirements of the project and after that, I concluded that I will build a 'Naruto Shippuden' themed shooting game. During the 1st half of the day, I designed the basic structure and flow of the game, I immediately start working on the layout of the game by gathering the sprites, music and other images. During the second half, I continue to work design of the game.                                                                      |                                                                                      By the end of the day, I was able to complete the template that I wanted to build.                                                                      | &#9745; |
| Day 2 |             Game Logic             |              During the 1st half, I watched 2-3  tutorials For a better understanding of Phaser 3. After gaining the basic knowledge of how things work in Phaser 3. I started working on the game logic. During the 2nd half, I kept on working on the logical part.              |                                            By the end of the day, I had a fully functional game that used Webpack to bundle all files (HTML, CSS,  JavaScript ) to start the game.                                             | &#9745; |
| Day 3 |          Game Template            | After completing the game logic all that is left is to work on the preloader and menu for the game. For that, I used the template provided by the Microverse. I followed the instruction given in the template while playing around with the code to implement some of my ideas. I completed the scoring system by using the provided API (Leaderboard API service) |                                                      By the end of the day, I had a fully working game that ran on my local environment. I still had some styling to do, but in general, I had a working project.                                                       | &#9745; |
| Day 4 |   Testing, Styling, and Deployment   |                                                I added the final design details to the game, like background images and personalized logo. I refactored my code to be able to test it using Jest. I made the tests for the modules I created to add functionality to the Phaser module. Finally, I deployed the app to Netlify.                                                 | By the end of the day, I had a complete project that was accessible everywhere through Netlify hosting. I separated the Dom and logic files and created tests for the methods I coded and implemented, and everything was up and running. | &#9745; |

<!-- future-updates -->

# Future Updates

- Add health bar
- Add more characters 
- Make a mobile version
- Add more levels
- Add special attack feature

<!-- CONTACT -->
## Authors

👤 **Jaspreet Singh** 
    
- [LinkedIn](https://www.linkedin.com/in/jaspreet-singh-a28286146/)
- [GitHub](https://github.com/jaspreet-singh-sahota)
- [Email](jaspreetsinghjassi01@gmail.com)

## Show your support

Give a ⭐️ if you like this project!

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jaspreet-singh-sahota/shooting-game-javascript-capstone.svg?style=flat-square
[contributors-url]: https://github.com/jaspreet-singh-sahota/shooting-game-javascript-capstone/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jaspreet-singh-sahota/shooting-game-javascript-capstone.svg?style=flat-square
[forks-url]: https://github.com/jaspreet-singh-sahota/shooting-game-javascript-capstone/network/members
[stars-shield]: https://img.shields.io/github/stars/jaspreet-singh-sahota/shooting-game-javascript-capstone.svg?style=flat-square
[stars-url]: https://github.com/jaspreet-singh-sahota/shooting-game-javascript-capstone/stargazers
[issues-shield]: https://img.shields.io/github/issues/jaspreet-singh-sahota/shooting-game-javascript-capstone.svg?style=flat-square
[issues-url]: https://github.com/jaspreet-singh-sahota/shooting-game-javascript-capstone/issues

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.