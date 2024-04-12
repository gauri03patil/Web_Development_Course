'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let buttonOpenModal = document.querySelectorAll('.show-modal');
let buttonCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

console.log(buttonOpenModal);

for (let i = 0; i < buttonOpenModal.length; i++) {
  buttonOpenModal[i].addEventListener('click', openModal);
}

buttonCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape') {
    closeModal();
  }
});
