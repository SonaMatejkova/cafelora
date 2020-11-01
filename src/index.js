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

const LayerList = (props) => {
  let layerList = '';
  for (let i = 0; i < props.items.length; i++) {
    layerList += Layer(props.items[i]);
  }
  return layerList;
};
/*
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

show(layers);*/

const drinks = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};
const Drink = (props) => {
  const drink = document.createElement('div');
  drink.className = 'drink';
  drink.innerHTML = `
            <div class="drink__product">
              <div class="drink__cup">
                <img src="/assets/cups/${props.id}.png" />
              </div>
              <div class="drink__info"><h3>${props.name}</h3>${LayerList({
    items: props.layers,
  })}</div>
            </div>
            <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>`;
  const orderBtn = drink.querySelector('.order-btn');
  orderBtn.addEventListener('click', () => {
    let ordered = props.ordered;
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
};
const drinksList = document.querySelector('.drinks-list');
drinksList.appendChild = Drink(drinks);
