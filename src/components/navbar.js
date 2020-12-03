/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

import homePage from '../pages/home';
import menuPage from '../pages/menu';
import platePage from '../pages/plate';

const getPageFunction = (index) => {
  const pageFunctions = [homePage, menuPage, platePage];
  return pageFunctions[index];
};

const renderLinks = (...elements) => {
  const NAV_ITEMS = ['Home', 'Menu', 'My Plate'];
  for (const i in elements) {
    if (elements[i] === undefined) {
      elements[i] = document.createElement('a');
      elements[i].classList.add('nav-link', 'mb-5', 'p-0', 'pb-1', 'w-auto', 'text-left', 'main-font');
      elements[i].href = '#';
      elements[i].addEventListener('click', () => {
        getPageFunction(i)();
      });
      elements[i].innerText = NAV_ITEMS[i];
    }
  }

  return elements;
};

const createNavElements = () => {
  let [home, menu, myPlate] = [];
  [home, menu, myPlate] = renderLinks(home, menu, myPlate);
  return {
    home,
    menu,
    myPlate,
  };
};

const createNavbar = () => {
  const navbarContainer = document.createElement('div');
  navbarContainer.classList.add('navbar_container', 'pl-3');
  const links = createNavElements();
  for (const i in links) {
    navbarContainer.appendChild(links[i]);
  }

  return navbarContainer;
};

export default createNavbar;
