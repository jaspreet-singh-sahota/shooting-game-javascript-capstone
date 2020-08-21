import LocalStorage from '../src/Objects/localStorage';

it('Save data to localStorage', () => {
  LocalStorage.saveLocalStorage('Jaspreet');
  expect(JSON.parse(localStorage.getItem('score'))).toBe('Jaspreet');
});

it('Get data from localStorage', () => {
  localStorage.setItem('score', JSON.stringify('Jaspreet'));
  expect(JSON.parse(localStorage.getItem('score'))).toBe('Jaspreet');
});

it('Read data from localStorage', () => {
  localStorage.setItem('score', JSON.stringify('Jaspreet'));
  expect(LocalStorage.readLocalStorage()).toBe('Jaspreet');
});

it('Clears all data from localStorage', () => {
  localStorage.setItem('score', JSON.stringify('Jaspreet'));
  LocalStorage.clearLocalStorage();
  expect(JSON.parse(localStorage.getItem('score'))).toBe(null);
});
