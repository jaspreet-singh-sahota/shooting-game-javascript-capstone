import API from './api';

const Dom = (() => {
  function form() {
    const body = document.querySelector('body');
    const form = document.createElement('div');
    const p = document.createElement('p');
    form.setAttribute('class', 'form');
    form.innerHTML = "<input type='search' class='input' placeholder='Enter your name!' aria-label='Search' required/></br><button type='submit' class='submit'> Submit Score</button>";
    form.appendChild(p);
    body.appendChild(form);
    return body;
  }

  function addButtonFunctionality(score) {
    let input = document.querySelectorAll('.input');
    let form = document.querySelectorAll('.form');
    let button = document.querySelectorAll('.submit');
    let p = document.querySelectorAll('p');
    const index = (form.length) - 1;
    button = document.querySelectorAll('.submit')[index];
    form = document.querySelectorAll('.form')[index];
    input = document.querySelectorAll('.input')[index]
    p = document.querySelectorAll('p')[index];
    setTimeout(() => {
      button.onclick = () => {
        if (input.value !== '') {
          form.innerHTML = '<h3 id="wait">Please wait... </h3>';
          API.postScores(input.value, score).then((response) => {
            form.innerHTML = `<h3 id="response">${response.result} </h3>`;
          });
        } else {
          p.innerHTML = 'Name can\'t be blank';
        }
      }; 
    }, 100);
  }

  return { form, addButtonFunctionality };
})();

export default Dom;
