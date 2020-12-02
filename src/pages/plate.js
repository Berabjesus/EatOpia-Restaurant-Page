import mainContainer from '../components/mainContainer';
import header from '../components/header'
import food1 from '../assets/plate/p1.png';
import food2 from '../assets/plate/p2.png';
import food3 from '../assets/plate/p3.png';
import food4 from '../assets/plate/p4.png';
import food5 from '../assets/plate/p5.png';
import food6 from '../assets/plate/p6.png';
import food7 from '../assets/plate/p7.png';
import food8 from '../assets/plate/p8.png';
import food9 from '../assets/plate/p9.png';
import * as getFunction from '../functions/elementProcessor';

const platePage = () => {
  const container = mainContainer()
  container.appendChild(header())
  buildBoard(container)
}

const buildBoard = (container) => {
  const section = document.createElement('section')
  section.classList.add('row','d-flex','pr-4','plate-section-one','w-100','py-4', 'fade_in')
  const sectionHeader = document.createElement('h2')
  sectionHeader.innerText = 'Drag and drop the items from the left to the plate to order your custom plate. Check the price on the right'
  sectionHeader.classList.add('text-center')

  const itemsContainer = document.createElement('div')
  itemsContainer.classList.add('plate-items-container','col-2','d-flex','flex-column','h-100' )
  const foods = [food1,food2,food3,food4,food5,food6,food7,food8,food9];
  let index = 0
  for (const food of foods) {
    index += 1
    let imgDiv = document.createElement('div')
    imgDiv.classList.add('drag-box','droppable')
    let foodImage = document.createElement('img')
    getFunction.setImageProperties(foodImage, food, 'h-100', 'w-100','dragbox-images')
    foodImage.id = 'draggable-'+index
    imgDiv.appendChild(foodImage)
    imgDiv.draggable = true
    itemsContainer.appendChild(imgDiv)
  }

  const plateContainer = document.createElement('div')
  plateContainer.classList.add('plate-container','col-9', 'd-flex', 'flex-wrap')
  const FOODS_ON_PLATE = 9
  for (let i = 0; i < FOODS_ON_PLATE; i++) {
    let div = document.createElement('div')
    div.classList.add('droppable','drop-box','mb-2')
    plateContainer.appendChild(div)
  }

  const priceContainer = document.createElement('div')
  priceContainer.classList.add('col-1')

  section.appendChild(sectionHeader)
  section.appendChild(itemsContainer)
  section.appendChild(plateContainer)
  section.appendChild(priceContainer)
  container.appendChild(section)

  addDragAndDrop()
}

const addDragAndDrop = () => {
  const dragBox = document.querySelectorAll('.dragbox-images')
  for (const box of dragBox) {
    box.addEventListener('dragover', function(e) {
      e.preventDefault()
    });
    box.addEventListener('dragstart', dragStart)
    box.addEventListener('dragend', dragEnd)  
    box.addEventListener('drop', dragDrop)  
  }
  const dropBox = document.querySelectorAll('.droppable')
  
  for (const box of dropBox) {
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', dragDrop)
  }
  
  function dragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
  }
  
  function dragEnd() {
    this.classList.remove('hold')
  }

  function dragOver(e) {
    e.preventDefault()
    this.classList.add('over')
  }

  function dragLeave(e) {
    this.classList.remove('over')
  }

  function dragDrop(e) {
    this.classList.remove('over')
    e.target.appendChild(document.getElementById(e.dataTransfer.getData("text")))
  }

}

export default platePage;