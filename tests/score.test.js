import API from '../src/Objects/api';

it('If score is 0, it returns an error', () => {
  API.postScores('test', 0)
    .then((response) => {
      expect(response).toBe(null);
    })
    .catch((error) => error);
});

it('Post a new score to database', () => {
  API.postScores('test', 1)
    .then((response) => {
      expect(response).toBe('Leaderboard score created correctly.');
    })
    .catch((error) => error);
});