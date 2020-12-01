import mainContainer from '../components/mainContainer';
import header from '../components/header'
import blackBoardPicture from '../assets/menu.jpg'
import * as getFunction from '../functions/elementProcessor';

const menuPage = () => {
  const container = mainContainer()
  container.appendChild(header())
  drawBlackBoard(container)
}

const drawBlackBoard = (container) => {
  
}

export default menuPage;