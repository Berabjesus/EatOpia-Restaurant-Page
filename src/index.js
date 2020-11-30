import 'bootstrap';
import './scss/style.scss';
import createNavbar from './components/navbar';
import homePage from './pages/home'

const body = document.getElementsByTagName('body')[0]
body.appendChild(createNavbar())

homePage()
