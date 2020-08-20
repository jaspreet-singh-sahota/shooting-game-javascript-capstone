/* eslint-disable no-unused-vars */
const API = (() => {
  async function getKey() {
    try {
      const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: 'Naruto Shooting Game',
          }),
        },
      );
      return response;
    } catch (error) {
      return error;
    }
  }

  async function getScores() {
    try {
      const scores = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0l2F2qhP58AheZFEqexZ/scores/',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      return scores.json();
    } catch (error) {
      return error.json();
    }
  }

  async function postScores(name, score) {
    try {
      const result = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0l2F2qhP58AheZFEqexZ/scores/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: name,
            score,
          }),
        },
      );
      return result.json();
    } catch (error) {
      return error.json();
    }
  }

  return { getScores, postScores , getKey};
})();

export default API;
