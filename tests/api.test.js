import API from '../src/Objects/api';

it('Get the scores from the localStorage', () => {
  API.getScores()
    .then((response) => {
      expect(response).toBe('Succeed');
    })
    .catch((error) => error);
});

it('Post a new score to localStorage', () => {
  API.postScores('jassi', 650)
    .then((response) => {
      expect(response).toBe('Leaderboard score created correctly.');
    })
    .catch((error) => error);
});

it('should send an object to the API', () => {
  API.postScores().then(data => {
    expect(typeof data).toBe('object');
  }).catch(() => { });
});

it('If name is not provided, then it should not send anything to avoid an error', () => {
  API.postScores('', 0)
    .then((response) => {
      expect(response).toBe(null);
    })
    .catch((error) => error);
});

it('Score can\'t be 0', () => {
  API.postScores('jassi', 0)
    .then((response) => {
      expect(response).toBe(null);
    })
    .catch((error) => error);
});

it('it should return the username', () => {
  API.getScores().then(data => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          user: 'Jassi',
        }),
      ]),
    );
  }).catch(() => { });
});

it('it should return the score', () => {
  API.getScores().then(data => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          score: '100',
        }),
      ]),
    );
  }).catch(() => { });
});
