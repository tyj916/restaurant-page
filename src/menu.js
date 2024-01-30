import bananaOatmealImg from './img/banana-oatmeal.jpg';
import bananaPancakeImg from './img/banana-pancake.jpg';
import friedBananaImg from './img/fried-banana.jpg';

export function render() {
  const container = document.createElement('div');
  container.classList.add('container');
  
  const h1 = document.createElement('h1');
  h1.textContent = "Menu";
  container.appendChild(h1);

  const cards = document.createElement('div');
  cards.classList.add('cards');
  container.appendChild(cards);

  foodlist.forEach(food => {
    const card = foodCard(food.title, food.img, food.description);
    cards.appendChild(card.getCard());
  });

  content.appendChild(container);
}

function foodCard(title, img, description) {
  const card = document.createElement('div');
  card.classList.add('card', 'card-with-img');

  const cardImg = new Image();
  cardImg.src = img;
  card.appendChild(cardImg);

  const descriptionEl = document.createElement('div');
  descriptionEl.classList.add('description');
  card.appendChild(descriptionEl);

  const foodTitle = document.createElement('h2');
  foodTitle.textContent = title;
  descriptionEl.appendChild(foodTitle);

  const foodDescription = document.createElement('p');
  foodDescription.textContent = description;
  descriptionEl.appendChild(foodDescription);

  const getCard = () => card;

  return {
    getCard,
  }
}

const foodlist = [
  {
    title: "Banana Oatmeal",
    img: bananaOatmealImg,
    description: "This banana oatmeal will fuel you up for the day. Mashed bananas add sweetness, and the warm spices and maple syrup complete this quick and comforting breakfast.",
  },
  {
    title: "Banana Pancake",
    img: bananaPancakeImg,
    description: "This fluffy banana pancake yields generous, light, and airy pancakes, loaded with banana bread flavor. With just a handful of pantry staples and ripe bananas, you can make your dream breakfast come true as often as you want!",
  },
  {
    title: "Fried Banana",
    img: friedBananaImg,
    description: "Made by deep frying battered banana in hot oil. These bananas taste sweet, gooey and buttery. Served on top of cool and creamy Greek yogurt, this desssert is simply decadent.",
  }
]