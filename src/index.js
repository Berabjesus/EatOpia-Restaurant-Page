import 'bootstrap';
import './scss/home.scss';
import './scss/menu.scss';
import createNavbar from './components/navbar';
import homePage from './pages/home'

// pleasasasdasdasdasdasdadas

import menuPage from './pages/menu';


// asdasdasdasdasdasasd

const body = document.getElementsByTagName('body')[0]
body.appendChild(createNavbar())

menuPage()
