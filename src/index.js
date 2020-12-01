import 'bootstrap';
import './scss/home.scss';
import './scss/menu.scss';
import createNavbar from './components/navbar';
import homePage from './pages/home'

const body = document.getElementsByTagName('body')[0]
body.appendChild(createNavbar())

homePage()
