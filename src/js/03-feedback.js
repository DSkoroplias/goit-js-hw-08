import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

// add event listeners

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));

  //   console.log(formData);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const formObj = new FormData(evt.currentTarget);
  formObj.forEach((value, name) => {
    console.log(name, value);
  });

  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function fillTextarea() {
  const savedDataJSON = localStorage.getItem(LOCALSTORAGE_KEY);

  if (!savedDataJSON) return;
  const saveData = JSON.parse(savedDataJSON);
  const keys = Object.keys(saveData);
  for (let key of keys) {
    refs.form.elements[key].value = saveData[key];
  }
}

fillTextarea();
