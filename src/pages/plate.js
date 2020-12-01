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
  section.classList.add('d-flex', 'flex-column','pr-4','plate-section-one','w-100', 'h-100vh', 'fade_in')

  
}

export default platePage;