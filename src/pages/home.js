import mainContainer from '../components/mainContainer'

const homePage = () => {
  firstSection(mainContainer())
}

const firstSection = (container) => {
  const BRAND_NAME = 'Eat Opia'
  const section = document.createElement('section')
  section.classList.add('row', 'd-flex', 'flex-column', 'home_section-one', 'h-100vh')

  const logo = document.createElement('div')
  logo.classList.add('d-flex', 'flex-column', 'logo-font')
  let mainHeader = document.createElement('h1')
  mainHeader.classList.add('logo')
  mainHeader.innerText = BRAND_NAME
  let subHeader = document.createElement('h4')
  subHeader.innerText = 'Test the local cuisine'
  logo.appendChild(mainHeader)
  logo.appendChild(subHeader)

  section.appendChild(logo)
  container.appendChild(section)
}

export default homePage;