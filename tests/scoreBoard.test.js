import API from '../src/Objects/api';

it('Retrieves the scores from the database', () => {
  API.getScores()
    .then((response) => {
      expect(response).toBe('Succeed');
    })
    .catch((error) => error);
});
