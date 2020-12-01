import mainContainer from '../components/mainContainer';
import mainImage from '../assets/home.jpg';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import food4 from '../assets/food4.jpg';
import food5 from '../assets/food5.jpg';
import food6 from '../assets/food6.jpg';
import * as getFunction from '../functions/elementProcessor';

const homePage = () => {
  firstSection(mainContainer())
}

const firstSection = (container) => {
  const BRAND_NAME = 'Eat Opia'
  const section = document.createElement('section')
  section.classList.add('d-flex', 'flex-column','p-left-main', 'section-one','w-100', 'h-100vh', 'fade_in')

  const logoContainer = document.createElement('div')
  logoContainer.classList.add('d-flex', 'flex-column', 'align-self-start','logo-container', 'logo-font')
  const mainHeader = document.createElement('h1')
  mainHeader.classList.add('logo')
  mainHeader.innerText = BRAND_NAME
  const subHeader = document.createElement('h6')
  subHeader.classList.add('text-center')
  subHeader.innerText = 'Test the local cuisine'
  logoContainer.appendChild(mainHeader)
  logoContainer.appendChild(subHeader)


  const imageContainer = document.createElement('div')
  imageContainer.classList.add('main-image-container', 'mx-auto')
  const image = document.createElement('img')
  getFunction.setImageProperties(image, mainImage, 'w-100', 'h-100')
  imageContainer.appendChild(image)

  const divider = getFunction.setPagedivider('Our Chefs')

  section.appendChild(logoContainer)
  section.appendChild(imageContainer)
  section.appendChild(divider)
  container.appendChild(section)

  secondSection(container)
}

const secondSection = (container) => {
  const section = document.createElement('section')
  section.classList.add('w-100','mt-5','pt-4', 'p-left-main','section-two')

  const videoContainer = document.createElement('div')
  videoContainer.classList.add('row', 'd-flex','h-100','pr-3','mb-5','video-container', 'fade_in')
  const video = document.createElement('iframe')
  video.setAttribute("src", 'https://www.youtube.com/embed/a0Z1vpJNrtE?autoplay=0');
  video.setAttribute("allowfullscreen", "allowfullscreen");
  video.classList.add('col-12','col-md-6','px-0','video','shadow-lg')

  const videoDescription = document.createElement('div')
  videoDescription.classList.add('col-12','col-md-6','d-flex', 'flex-column', 'row', 'px-5')
  const descriptionHeader = document.createElement('h2')
  descriptionHeader.classList.add('main-font', 'text-left')
  descriptionHeader.innerText = 'Ethiopian cuisine'
  const descriptionContent = document.createElement('p')
  descriptionContent.classList.add('h5', 'mx-auto')
  descriptionContent.innerText = 'Ethiopian cuisine characteristically consists of vegetable and often very spicy meat dishes. This is usually in the form of wat, a thick stew, served atop injera, a large sourdough flatbread, which is about 50 centimeters (20 inches) in diameter and made out of fermented teff flour.Ethiopians eat most of the time with their right hands, using pieces of injera to pick up bites of entrées and side dishes.'

  videoDescription.appendChild(descriptionHeader)
  videoDescription.appendChild(descriptionContent)
  videoContainer.appendChild(video)
  videoContainer.appendChild(videoDescription)

  const divider = getFunction.setPagedivider('Always at your service')

  getFunction.appendOnScroll(section,'divider-line',0,false,videoContainer, divider)

  container.appendChild(section)
  thirdSection(container)
}

const thirdSection = (container) => {
  const section = document.createElement('section')
  section.classList.add('row','w-100','mt-5','pt-4','p-left-main','pr-5','section-three')

  const imageContainer = document.createElement('div')
  imageContainer.classList.add('d-flex','flex-wrap','col-12', 'col-md-6', 'h-100', 'px-0', 'pr-2','s3-image-container', 'fade_in')
  const foodImages = [food1, food2, food3,food4,food5,food6]
  for (const fileSource of foodImages) {
    let newImage = document.createElement('img')
    getFunction.setImageProperties(newImage, fileSource, 's3-images')
    imageContainer.appendChild(newImage)
  }

  const mapContianer = document.createElement('div')
  mapContianer.classList.add('col-12', 'col-md-6', 'shadow-lg', 'px-3', 'fade_in')
  mapContianer.id = 'locationMap';
  let mapTag = document.createElement('script');
  mapTag.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD6vfV2Sv3RnCU0hlBNQeAdrGX65yKXOuw&callback=initMap";
  mapTag.defer = true;
  mapContianer.appendChild(mapTag)

  const divider = getFunction.setPagedivider('Contact Us')

  getFunction.appendOnScroll(section, 'divider-line',1,true,imageContainer, mapContianer, divider)

  // section.appendChild(imageContainer)
  // section.appendChild(mapContianer)
  
  container.appendChild(section)
}



 window.initMap = () => {
  var restaurantCoordinates = {lat:  9.016226979125845, lng:38.742519222017364};
  var mapOptions = {
      center: restaurantCoordinates,
      zoom: 16
  };
  setTimeout(() => {
    var googlemap = new google.maps.Map(document.getElementById("locationMap"), mapOptions);
  }, 100);
}

export default homePage;