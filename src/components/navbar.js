import setLinkToActive from '../functions/navitems'

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
  [home, menu, custom_plate,about] = addPropertiesToElements(home, menu, custom_plate,about);
  return {
    home: home,
    menu: menu,
    custom_plate: custom_plate,
    about: about
  }
}

const addPropertiesToElements = (...elements) => {
  const NAV_ITEMS = ['Home', 'Menu', 'My Plate', 'About']
  for (let i in elements) {
    elements[i] = document.createElement('a')
    elements[i].classList.add('nav-link', 'mb-4','p-0', 'pb-1', 'w-auto', 'main-font')
    elements[i].href = '#'
    elements[i].addEventListener("click", ()=>{setLinkToActive(elements[i])});
    elements[i].innerText = NAV_ITEMS[i]
  } 
  return elements
}

export default createNavbar;