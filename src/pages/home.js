import mainContainer from '../components/mainContainer';
import mainImage from '../assets/home.jpg';
import * as getFunction from '../functions/elementProcessor';

const homePage = () => {
  firstSection(mainContainer())
}

const firstSection = (container) => {
  const BRAND_NAME = 'Eat Opia'
  const section = document.createElement('section')
  section.classList.add('d-flex', 'flex-column', 'section-one','w-100', 'h-100vh', 'fade_in')

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
  getFunction.setImageProperties(image, mainImage, 'main-image')
  imageContainer.appendChild(image)

  const divider = setPagedivider('Best Restaurant In Town')

  section.appendChild(logoContainer)
  section.appendChild(imageContainer)
  section.appendChild(divider)
  container.appendChild(section)

  secondSection(container)
}

const secondSection = (container) => {
  const section = document.createElement('section')
  section.classList.add('w-100','mt-5', 'custom-border', 'section-two')

  const videoContainer = document.createElement('div')
  videoContainer.classList.add('d-flex','h-100','pr-3','video-container', 'fade_in')
  const video = document.createElement('iframe')
  video.classList.add('col-12','col-md-6','video')
  video.setAttribute("src", 'https://www.youtube.com/embed/a0Z1vpJNrtE?autoplay=0');
  video.setAttribute("allowfullscreen", "allowfullscreen");
  video.setAttribute("clipboard-write","clipboard-write")
  video.style.width = "640px";
  video.style.height = "100%";

  const videoDescription = document.createElement('div')
  videoDescription.classList.add('col-12','col-md-6','d-flex', 'flex-column')
  const descriptionHeader = document.createElement('h2')
  descriptionHeader.classList.add('main-font', 'text-center')
  descriptionHeader.innerText = 'Ethiopian cuisine'
  const descriptionContent = document.createElement('p')
  descriptionContent.classList.add('h5')
  descriptionContent.innerText = 'Ethiopian cuisine characteristically consists of vegetable and often very spicy meat dishes. This is usually in the form of wat, a thick stew, served atop injera, a large sourdough flatbread, which is about 50 centimeters (20 inches) in diameter and made out of fermented teff flour.Ethiopians eat most of the time with their right hands, using pieces of injera to pick up bites of entrées and side dishes.'

  videoDescription.appendChild(descriptionHeader)
  videoDescription.appendChild(descriptionContent)

  videoContainer.appendChild(video)
  videoContainer.appendChild(videoDescription)

  getFunction.renderOnScroll(section, videoContainer, document.getElementsByClassName('divider-line')[0])

  container.appendChild(section)
}

const setPagedivider = (text) => {
  let divider = document.createElement('h5')
  divider.innerText = text
  divider.classList.add('align-self-center','divider-line')
  return divider
}

export default homePage;