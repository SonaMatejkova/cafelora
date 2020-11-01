import { Drink } from './Drink';
import './index.html';
import './style.css';

console.log('funguju!');

const navBtn = document.querySelector('#nav-btn');

navBtn.addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('nav-closed');
});

const odkaz = document.querySelectorAll('.odkaz');

for (let i = 0; i < odkaz.length; i++) {
  odkaz[i].addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.add('nav-closed');
  });
}

const drinksList = document.querySelector('.drinks-list');

const nacti = () => {
  fetch('http://cafelora.kodim.cz/api/drinks')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        drinksList.appendChild(Drink(data[i]));
      }
    });
};

nacti();
