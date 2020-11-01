import { LayerList } from '../LayerList';
import './style.css';

export const Drink = (props) => {
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
    drink.querySelector('.drink__cup').classList.toggle('drink__cup--selected');
    if (props.ordered === false) {
      orderBtn.textContent = 'Zrušit';
      props.ordered = true;
    } else {
      orderBtn.textContent = 'Objednat';
      props.ordered = false;
    }
  });
  return drink;
};
