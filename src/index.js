import {render as renderMenu} from './menu';

// cache DOM
const body = document.querySelector('body');
const nav = body.querySelector('nav')
const content = body.querySelector('#content');

// event listeners
nav.addEventListener('click', switchContent);

render();

function render() {
  const container = document.createElement('div');
  container.classList.add('container');
  
  const h1 = document.createElement('h1');
  h1.textContent = "The Banana Shop";
  container.appendChild(h1);

  const operatingHour = document.createElement('div');
  operatingHour.classList.add('blank-card', 'operating-hour');
  operatingHour.textContent = "Operating Hour:"
  container.appendChild(operatingHour);

  const monToFri = document.createElement('p');
  monToFri.textContent = "Mon ~ Fri: 8:00am ~ 5:00pm";
  operatingHour.appendChild(monToFri);

  const satSun = document.createElement('p');
  satSun.textContent = "Sat & Sun: 8:00am ~ 11:00pm";
  operatingHour.appendChild(satSun);

  content.appendChild(container);
}

function switchContent(event) {
  const target = event.target;
  
  if (target.id) {
    content.textContent = '';

    const current = nav.querySelectorAll('.current');
    current.forEach(btn => {
      btn.classList.remove('current');
    });

    target.classList.add('current');
  }

  switch (target.id) {
    case 'home':
      render();
      break;

    case 'menu':
      renderMenu();
      break;

    case 'about':
      console.log('about');
      break;
  }
}