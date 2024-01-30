import img from './banana-oatmeal.jpg';

export function render() {
  const container = document.createElement('div');
  container.classList.add('container');
  
  const h1 = document.createElement('h1');
  h1.textContent = "Menu";
  container.appendChild(h1);

  const cards = document.createElement('div');
  cards.classList.add('cards');
  container.appendChild(cards);

  const card = document.createElement('div');
  card.classList.add('card', 'card-with-img');
  cards.appendChild(card);

  const cardImg = new Image();
  cardImg.src = img;
  card.appendChild(cardImg);

  const description = document.createElement('div');
  description.classList.add('description');
  card.appendChild(description);

  const foodTitle = document.createElement('h2');
  foodTitle.textContent = "Banana Oatmeal";
  description.appendChild(foodTitle);

  const foodDescription = document.createElement('p');
  foodDescription.textContent = "This banana oatmeal will fuel you up for the day. Mashed bananas add sweetness, and the warm spices and maple syrup complete this quick and comforting breakfast.";
  description.appendChild(foodDescription);

  content.appendChild(container);
}