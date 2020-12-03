/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */

import mainContainer from '../components/mainContainer';
import header from '../components/header';
import * as getFunction from '../functions/elementProcessor';

import mainImage from '../assets/home.jpg';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import food4 from '../assets/food4.jpg';
import food5 from '../assets/food5.jpg';
import food6 from '../assets/food6.jpg';

const homePage = () => {
  firstSection(mainContainer());
};

const firstSection = (container) => {
  const section = document.createElement('section');
  section.classList.add('d-flex', 'flex-column', 'p-left-main', 'section-one', 'w-100', 'h-100vh', 'fade_in');

  const logoContainer = header();
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('main-image-container', 'mx-auto');
  const image = document.createElement('img');
  getFunction.setImageProperties(image, mainImage, 'w-100', 'h-100');
  imageContainer.appendChild(image);

  const divider = getFunction.setPagedivider('Our Chefs');

  section.appendChild(logoContainer);
  section.appendChild(imageContainer);
  section.appendChild(divider);
  container.appendChild(section);

  secondSection(container);
};

const secondSection = (container) => {
  const section = document.createElement('section');
  section.classList.add('w-100', 'mt-5', 'pt-4', 'p-left-main', 'section-two');

  const videoContainer = document.createElement('div');
  videoContainer.classList.add('row', 'd-flex', 'h-100', 'pr-3', 'mb-5', 'video-container', 'fade_in');
  const video = document.createElement('iframe');
  video.setAttribute('src', 'https://www.youtube.com/embed/a0Z1vpJNrtE?autoplay=0');
  video.setAttribute('allowfullscreen', 'allowfullscreen');
  video.classList.add('col-12', 'col-md-6', 'px-0', 'video', 'shadow-lg');

  const videoDescription = document.createElement('div');
  videoDescription.classList.add('col-12', 'col-md-6', 'd-flex', 'flex-column', 'row', 'px-5');
  const descriptionHeader = document.createElement('h2');
  descriptionHeader.classList.add('main-font', 'text-left');
  descriptionHeader.innerText = 'Ethiopian cuisine';
  const descriptionContent = document.createElement('p');
  descriptionContent.classList.add('h5', 'mx-auto');
  descriptionContent.innerText = 'Ethiopian cuisine characteristically consists of vegetable and often very spicy meat dishes. This is usually in the form of wat, a thick stew, served atop injera, a large sourdough flatbread, which is about 50 centimeters (20 inches) in diameter and made out of fermented teff flour.Ethiopians eat most of the time with their right hands, using pieces of injera to pick up bites of entrées and side dishes.';

  videoDescription.appendChild(descriptionHeader);
  videoDescription.appendChild(descriptionContent);
  videoContainer.appendChild(video);
  videoContainer.appendChild(videoDescription);

  const divider = getFunction.setPagedivider('Always at your service');

  getFunction.appendOnScroll(section, 'divider-line', 0, videoContainer, divider);

  container.appendChild(section);
  thirdSection(container);
};

const thirdSection = (container) => {
  const section = document.createElement('section');
  section.classList.add('row', 'w-100', 'mt-5', 'pt-4', 'p-left-main', 'pr-5', 'section-three');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('d-flex', 'flex-wrap', 'col-12', 'col-md-6', 'h-100', 'px-0', 'pr-2', 's3-image-container', 'fade_in');
  const foodImages = [food1, food2, food3, food4, food5, food6];
  for (const fileSource of foodImages) {
    const newImage = document.createElement('img');
    getFunction.setImageProperties(newImage, fileSource, 's3-images');
    imageContainer.appendChild(newImage);
  }

  const mapContianer = document.createElement('div');
  mapContianer.classList.add('col-12', 'col-md-6', 'shadow-lg', 'px-3', 'fade_in');
  mapContianer.id = 'locationMap';
  const mapTag = document.createElement('script');
  mapTag.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD6vfV2Sv3RnCU0hlBNQeAdrGX65yKXOuw&callback=initMap';
  mapTag.defer = true;
  mapContianer.appendChild(mapTag);

  const divider = getFunction.setPagedivider('Contact Us');
  divider.classList.add('mt-5');
  getFunction.appendOnScroll(section, 'divider-line', 1, imageContainer, mapContianer, divider);

  container.appendChild(section);
  fourthSection(container);
};

const fourthSection = (container) => {
  const section = document.createElement('section');
  section.classList.add('row', 'd-flex', 'justify-content-around', 'w-100', 'p-left-main', 'pr-5', 'section-four');
  const footerSection = [
    {
      title: 'Contact Us',
      items: ['FaceBook', 'Twitter', 'YouTube', 'Instagram'],
    },
    {
      title: 'Services',
      items: ['Delivery', 'Order', 'Weeding', 'Birthdays'],
    },
    {
      title: 'Other',
      items: ['FAQ', 'Employees', 'Clients', 'Blog'],
    },
  ];

  for (const div of footerSection) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('d-flex', 'flex-column', 'col-6', 'col-md-3');
    const header = document.createElement('h2');
    header.innerText = div.title;
    header.classList.add('border-bottom', 'border-dark', 'mr-auto', 'pb-3');
    itemContainer.appendChild(header);
    for (let item of div.items) {
      const text = item;
      item = document.createElement('a');
      item.innerText = text;
      item.href = '#';
      item.classList.add('footer-item', 'mt-3', 'main-font');
      itemContainer.appendChild(item);
    }
    section.appendChild(itemContainer);
  }

  container.appendChild(section);
};

window.initMap = () => {
  const restaurantCoordinates = { lat: 9.016226979125845, lng: 38.742519222017364 };
  const mapOptions = {
    center: restaurantCoordinates,
    zoom: 16,
  };
  setTimeout(() => {
    /* eslint-disable no-undef */

    const googlemap = new google.maps.Map(document.getElementById('locationMap'), mapOptions);
    /* eslint-enable no-undef */
    return googlemap;
  }, 100);
};

export default homePage;