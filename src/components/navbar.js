import setLinkToActive from '../functions/navitems';
import * as getFunction from '../functions/elementProcessor';
import homePage from '../pages/home';
import menuPage from '../pages/menu';
import platePage from '../pages/plate';

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
  let [home, menu, custom_plate] = [,,];
  [home, menu, custom_plate] = renderLinks(home, menu, custom_plate);
  return {
    home: home,
    menu: menu,
    custom_plate: custom_plate,
  }
}

const renderLinks = (...elements) => {
  const NAV_ITEMS = ['Home', 'Menu', 'My Plate']
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
  const pageFunctions = [homePage, menuPage, platePage]
  return pageFunctions[index]
}

export default createNavbar;

