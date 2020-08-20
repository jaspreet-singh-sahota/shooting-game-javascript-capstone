import API from './api';

const Dom = (() => {
  function form() {
    const body = document.querySelector('body');
    const form = document.createElement('div');
    const p = document.createElement('p');
    form.setAttribute('id', 'form');
    form.innerHTML = "<input type='search' id='input' placeholder='Enter your name!' aria-label='Search' required/></br><button type='submit' id='submit'> Submit Score</button>";
    form.appendChild(p)
    body.appendChild(form)
    return body;
  }

  function addButtonFunctionality(score) {
  const button = document.querySelector('button');
    const input = document.querySelector('input');
    const form = document.querySelector('#form');
    const p = document.querySelector('p');
    button.onclick = () => {
      console.log("clicked")
      if (input.value !== '') {
        form.classList.add('empty');
        form.innerHTML = '<p>Please wait... </p>';
        API.postScores(input.value, score).then((response) => {
          form.innerHTML = `<p>${response.result} </p>`;
        });
      } else {
        p.innerHTML = 'Name can\'t be blank'
      }
    };
  }

  return { form, addButtonFunctionality };
})();

export default Dom;
