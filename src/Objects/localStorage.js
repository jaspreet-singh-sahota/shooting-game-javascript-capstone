const LocalStorage = (() => {
  function saveLocalStorage(score) {
    localStorage.setItem('score', JSON.stringify(score));
  }

  function readLocalStorage() {
    const score = JSON.parse(localStorage.getItem('score'));

    if (!score) {
      return 1;
    }
    return score;
  }

  function clearLocalStorage() {
    localStorage.clear();
  }

  return { saveLocalStorage, readLocalStorage, clearLocalStorage };
})();

export default LocalStorage;
