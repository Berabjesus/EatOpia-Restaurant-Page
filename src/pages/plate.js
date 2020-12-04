/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */

import mainContainer from '../components/mainContainer';
import header from '../components/header';
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
  const container = mainContainer();
  container.appendChild(header());
  buildBoard(container);
};

const buildBoard = (container) => {
  const section = document.createElement('section');
  section.classList.add('row', 'd-flex', 'pr-4', 'plate-section-one', 'w-100', 'py-4', 'fade_in');
  const sectionHeader = document.createElement('h2');
  sectionHeader.innerText = 'Drag and drop the items from the left to the plate to order your custom plate. Check the price on the right';
  sectionHeader.classList.add('text-center');

  const itemsContainer = document.createElement('div');
  itemsContainer.classList.add('plate-items-container', 'col-2', 'd-flex', 'flex-column', 'h-100', 'shadow-lg');
  const foods = getFoods();
  let index = 0;
  for (const food of foods) {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('drag-box', 'droppable', 'mb-1');
    const foodImage = document.createElement('img');
    getFunction.setImageProperties(foodImage, food.picture, 'h-100', 'w-100', 'dragbox-images');
    foodImage.id = `draggable-${index}`;
    foodImage.setAttribute('data-price', food.price);
    foodImage.draggable = true;
    imgDiv.appendChild(foodImage);
    itemsContainer.appendChild(imgDiv);
    index += 1;
  }

  const plateContainer = document.createElement('div');
  plateContainer.classList.add('plate-container', 'col-9', 'd-flex', 'flex-wrap');
  const FOODS_ON_PLATE = 9;
  for (let i = 0; i < FOODS_ON_PLATE; i += 1) {
    const div = document.createElement('div');
    div.classList.add('droppable', 'drop-box', 'mb-2');
    plateContainer.appendChild(div);
  }

  const priceContainer = document.createElement('div');
  priceContainer.classList.add('col-1', 'd-flex', 'align-items-start', 'px-0', 'price-container');
  const priceBox = document.createElement('div');
  priceBox.classList.add('price-box', 'd-flex', 'flex-column', 'text-center', 'h4');
  priceBox.innerText = 'Total Price';
  const price = document.createElement('h1');
  price.innerText = 0;
  price.classList.add('total-price');
  const orderBtn = document.createElement('button');
  orderBtn.innerText = 'Order Now';
  orderBtn.classList.add('btn', 'btn-dark', 'shadow-lg');

  priceBox.appendChild(price);
  priceBox.append(orderBtn)
  priceContainer.appendChild(priceBox);

  section.appendChild(sectionHeader);
  section.appendChild(itemsContainer);
  section.appendChild(plateContainer);
  section.appendChild(priceContainer);
  container.appendChild(section);

  addDragAndDrop();
};

const addDragAndDrop = () => {
  const dragBox = document.querySelectorAll('.dragbox-images');
  for (const box of dragBox) {
    box.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    box.addEventListener('dragstart', dragStart);
    box.addEventListener('drop', dragDrop);
  }
  const dropBox = document.querySelectorAll('.droppable');

  for (const box of dropBox) {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
  }

  function dragStart(e) {
    e.dataTransfer.setData('foodItem', e.target.id);
  }

  function dragOver(e) {
    e.preventDefault();
    this.classList.add('over');
  }

  function dragLeave() {
    this.classList.remove('over');
  }

  function dragDrop(e) {
    this.classList.remove('over');
    const data = e.dataTransfer.getData('foodItem');
    e.target.appendChild(document.getElementById(data));
    calculatePrice(e.target, data);
  }
};

const getFoods = () => {
  const foods = [food1, food2, food3, food4, food5, food6, food7, food8, food9];
  const price = [20, 25, 15, 17, 50, 55, 30, 45, 50];
  for (const index in foods) {
    if (foods[index] !== undefined) {
      foods[index] = setFoodObject(foods[index], price[index]);
    }
  }

  return foods;
};

const setFoodObject = (foodPicture, price) => {
  const newFoodObject = {
    picture: foodPicture,
    price,
  };
  return newFoodObject;
};

const calculatePrice = (element, id) => {
  const boxesInPlate = document.getElementsByClassName('drop-box');
  const price = document.querySelector('.total-price');
  let sum = 0;
  if (element.classList.contains('drop-box')) {
    for (const box of boxesInPlate) {
      if (box.children[0] !== undefined) {
        sum = parseInt(price.innerText, 10) + parseInt(box.children[0].getAttribute('data-price'), 10);
      }
    }
    price.innerText = sum;
  } else {
    sum = parseInt(price.innerText, 10) - parseInt(document.getElementById(id).getAttribute('data-price'), 10);
  }
  price.innerText = sum;
};

export default platePage;