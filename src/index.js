import { Layer } from './Layer';
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

const LayerList = (props) => {
  let layerList = '';
  for (let i = 0; i < props.items.length; i++) {
    layerList += Layer(props.items[i]);
  }
  return layerList;
};

const drinkInfo = document.querySelector('.drink__info');
const show = (list) => {
  drinkInfo.innerHTML = `<h3>Cappuccino</h3> ${LayerList({ items: list })}`;
};

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

show(layers);
