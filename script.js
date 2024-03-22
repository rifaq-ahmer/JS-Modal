'use strict';

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModalBtns = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModalBtns.length; i++)
  showModalBtns[i].addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  event.key === 'Escape' && !modal.classList.contains('hidden') && closeModal();
});
