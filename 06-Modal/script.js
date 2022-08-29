'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    console.log('Button Clicked');

    // Makes hidden text appear whenever a button is clicked
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');


}
console.log(btnsOpenModal);

// no need for curly braces in one line for loops
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// keydown activates once, keypress is continuos
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});