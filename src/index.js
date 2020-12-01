import 'bootstrap';
import './scss/home.scss';
import './scss/menu.scss';
import './scss/plate.scss';
import createNavbar from './components/navbar';
import homePage from './pages/home'
import platePage from './pages/plate'

// pleasasasdasdasdasdasdadas

import menuPage from './pages/menu';


// asdasdasdasdasdasasd

const body = document.getElementsByTagName('body')[0]
body.appendChild(createNavbar())

// menuPage()
// platePage()
homePage()
