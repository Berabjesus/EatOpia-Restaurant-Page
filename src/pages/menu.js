/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-use-before-define */

import mainContainer from '../components/mainContainer';
import header from '../components/header';
import blackBoardPicture from '../assets/menu.jpg';
import * as getFunction from '../functions/elementProcessor';

const menuPage = () => {
  const container = mainContainer();
  container.appendChild(header());
  drawBlackBoard(container);
};

const drawBlackBoard = (container) => {
  const section = document.createElement('section');
  section.classList.add('d-flex', 'flex-column', 'pr-4', 'menu-section-one', 'w-100', 'h-100vh', 'fade_in');

  const header = document.createElement('h1');
  header.classList.add('font-weight-bolder', 'main-font', 'text-center', 'pb-3');
  header.innerText = 'Daily Specials';

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('menu-image-container', 'w-100', 'h-100');
  const image = document.createElement('img');
  getFunction.setImageProperties(image, blackBoardPicture, 'w-100', 'h-100', 'menu-image');

  const menuTextContainer = document.createElement('div');
  menuTextContainer.classList.add('menu-text-container', 'd-flex', 'flex-column');
  const menuHeader = document.createElement('h1');
  menuHeader.innerText = "Today's Specials";
  const menuItems = ['Local Doro Wot', 'Local Key wot', 'Special Burger', 'Special Pizza'];
  menuTextContainer.appendChild(menuHeader);
  for (const index in menuItems) {
    const newText = document.createElement('h4');
    newText.innerText = `${parseInt(index) + 1}. ${menuItems[index]}`;
    menuTextContainer.appendChild(newText);
  }
  imageContainer.appendChild(image);
  imageContainer.appendChild(menuTextContainer);

  section.appendChild(header);
  section.appendChild(imageContainer);
  container.appendChild(section);
};

export default menuPage;