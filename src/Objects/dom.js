import API from './api';

const Dom = (() => {
  function form() {
    const body = document.querySelector('body');
    const form = document.createElement('div');
    form.setAttribute('id', 'form');
    form.innerHTML = "<input type='search' id='input' placeholder='Enter your name!' aria-label='Search' required/></br><button type='submit' id='submit'> Submit Score</button>";
    body.appendChild(form)
    return body;
  }

  function addButtonFunctionality(score) {
    const button = document.querySelector('button');
    const input = document.querySelector('input');
    const div = document.querySelector('form');
    console.log(button)
    button.onclick = () => {
      if (input.value !== '') {
        div.classList.add('empty');
        div.innerHTML = '<p>Please wait... </p>';
        API.postScores(input.value, score).then((response) => {
          div.innerHTML = `<p>${response.result} </p>`;
        });
      } else if (document.getElementsByTagName('p').length === 0) {
        const p = document.createElement('p');
        p.innerHTML = 'Name can not be blank';
        div.appendChild(p);
      }
    };
  }

  return { form, addButtonFunctionality };
})();

export default Dom;
