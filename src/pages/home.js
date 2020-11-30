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
  videoDescription.classList.add('col-12','col-md-6')
  videoDescription.innerText = '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis a eos maxime nisi sapiente unde, amet libero neque assumenda reprehenderit necessitatibus! Debitis nulla similique voluptatem quo dignissimos culpa id dolorem maiores soluta ea enim, laudantium voluptatum odit recusandae iste rem.'

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