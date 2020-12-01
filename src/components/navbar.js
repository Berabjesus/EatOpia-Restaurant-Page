import setLinkToActive from '../functions/navitems';
import * as getFunction from '../functions/elementProcessor';
import homePage from '../pages/home';
import menuPage from '../pages/menu';

const createNavbar = () => {
  const navbarContainer = document.createElement('div')
  navbarContainer.classList.add('navbar_container')
  const links = createNavElements()
  for (let i in links) {
    navbarContainer.appendChild(links[i])
  }

  return navbarContainer;
}

const createNavElements = () => {
  let [home, menu, custom_plate,about] = [,,,];
  [home, menu, custom_plate,about] = renderLinks(home, menu, custom_plate,about);
  return {
    home: home,
    menu: menu,
    custom_plate: custom_plate,
    about: about
  }
}

const renderLinks = (...elements) => {
  const NAV_ITEMS = ['Home', 'Menu', 'My Plate', 'About']
  for (let i in elements) {
    elements[i] = document.createElement('a')
    elements[i].classList.add('nav-link', 'mb-5','p-0', 'pb-1', 'w-auto','text-left','main-font')
    elements[i].href = "#"
    elements[i].addEventListener("click", function() {
      getPageFunction(i)()
    });
    elements[i].innerText = NAV_ITEMS[i]
  } 
  return elements
}

const getPageFunction = (index) => {
  const pageFunctions = [homePage, menuPage, homePage, homePage]
  return pageFunctions[index]
}

export default createNavbar;

