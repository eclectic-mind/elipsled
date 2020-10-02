const mobMenu = document.querySelector('.mobile-menu');
const sandwitch = document.querySelector('.sandwitch');

sandwitch.addEventListener('click', (evt) => {
  evt.preventDefault();
  mobMenu.classList.toggle('hidden');
  sandwitch.classList.toggle('closing');
});