import mainContainer from '../components/mainContainer';
import header from '../components/header'
import * as getFunction from '../functions/elementProcessor';

const platePage = () => {
  const container = mainContainer()
  container.appendChild(header())
  buildBoard(container)
}

const buildBoard = (container) => {
  const section = document.createElement('section')
  section.classList.add('row','d-flex','pr-4','plate-section-one','w-100', 'h-100vh', 'fade_in')
  const itemsContainer = document.createElement('div')
  itemsContainer.classList.add('col-2','d-flex','flex-colum','h-100' ,'custom-border')

  const plateContainer = document.createElement('div')
  plateContainer.classList.add('col-10', 'p-2', 'd-flex', 'flex-wrap','custom-border')
  const NUMBER_OF_ITEMS_ON_PLATE = 6


  section.appendChild(itemsContainer)
  section.appendChild(plateContainer)
  container.appendChild(section)
}

export default platePage;