import './index.html';
import './style.css';

console.log('funguju!');

const navBtn = document.querySelector('#nav-btn');
navBtn.addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('nav-closed');
});

const odkaz = document.querySelectorAll('a');
for (let i = 0; i < odkaz.length; i++) {
  odkaz[i].addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.add('nav-closed');
  });
}

let ordered = false;
const orderBtn = document.querySelector('.order-btn');
orderBtn.addEventListener('click', () => {
  document
    .querySelector('.drink__cup')
    .classList.toggle('drink__cup--selected');
  if (ordered === false) {
    orderBtn.textContent = 'Zrušit';
    ordered = true;
  } else {
    orderBtn.textContent = 'Objednat';
    ordered = false;
  }
});
