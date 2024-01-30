export function render() {
  const container = document.createElement('div');
  container.classList.add('container');
  
  const h1 = document.createElement('h1');
  h1.textContent = "About";
  container.appendChild(h1);

  const cards = document.createElement('div');
  cards.classList.add('cards');
  container.appendChild(cards);

  const aboutCard = document.createElement('div');
  aboutCard.classList.add('card', 'card-text');
  cards.appendChild(aboutCard);

  const aboutText = document.createElement('p');
  aboutText.textContent = "A yellow, curved fruit with a thick skin and soft sweet flesh. This fruit is also a rich source of vitamins, minerals and packed with nutrients. Thus made banana our top pick ingredient for making quick and simple yet delicious food."
  aboutCard.appendChild(aboutText);

  const bananaTeam = document.createElement('h3');
  bananaTeam.textContent = "The Banana Team";
  bananaTeam.classList.add("banana-team");
  aboutCard.appendChild(bananaTeam);

  const locationCard = document.createElement('div');
  locationCard.classList.add('card', 'card-text');
  cards.appendChild(locationCard);

  const locationTitle = document.createElement('h2');
  locationTitle.textContent = "Our location";
  locationCard.appendChild(locationTitle);

  const location = document.createElement('p');
  location.textContent = "123, St. Louis Rd, Space Town, Unknown State, 82931, The Imaginary Country."
  locationCard.appendChild(location);

  content.appendChild(container);
}