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
  plateContainer.classList.add('plate-container','col-9', 'd-flex', 'flex-wrap','custom-border')
  const priceContainer = document.createElement('div')
  priceContainer.classList.add('col-1', 'custom-border')

  const FOODS_ON_PLATE = 9
  for (let i = 0; i < FOODS_ON_PLATE; i++) {
    let div = document.createElement('div')
    div.classList.add('food-box', 'custom-border')
    plateContainer.appendChild(div)
  }


  section.appendChild(itemsContainer)
  section.appendChild(plateContainer)
  section.appendChild(priceContainer)
  container.appendChild(section)
}

export default platePage;