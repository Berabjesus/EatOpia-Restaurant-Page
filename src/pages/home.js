import mainContainer from '../components/mainContainer';
import mainImage from '../assets/home.jpg';
import * as getFunction from '../functions/elementProcessor';

const homePage = () => {
  firstSection(mainContainer())
}

const firstSection = (container) => {
  const BRAND_NAME = 'Eat Opia'
  const section = document.createElement('section')
  section.classList.add('d-flex', 'flex-column', 'home_section-one','w-100', 'h-100vh', 'custom-border')

  const logoContainer = document.createElement('div')
  logoContainer.classList.add('d-flex', 'flex-column','w-100','logo-container', 'logo-font')
  let mainHeader = document.createElement('h1')
  mainHeader.classList.add('logo')
  mainHeader.innerText = BRAND_NAME
  let subHeader = document.createElement('h6')
  subHeader.innerText = 'Test the local cuisine'
  logoContainer.appendChild(mainHeader)
  logoContainer.appendChild(subHeader)

  section.appendChild(logoContainer)

  const imageContainer = document.createElement('div')
  imageContainer.classList.add('main-image-container', 'mx-auto')
  const image = document.createElement('img')
  getFunction.setImageProperties(image, mainImage, 'main-image')
  imageContainer.appendChild(image)
  
  section.appendChild(imageContainer)
  container.appendChild(section)
}

export default homePage;