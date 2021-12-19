const createNote = require('./createNote')


const noteContent = document.querySelector('#content');
const button = document.querySelector('#btn');
const form = document.querySelector('#note-form');

button.addEventListener('click', (event) => {
  event.preventDefault();
  let content = noteContent.value;

  createNote(content);
  form.reset();

});