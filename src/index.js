import 'bootstrap';
import './scss/style.scss';
import createNavbar from './components/navbar';
import homePage from './pages/home'

const body = document.getElementsByTagName('body')[0]
body.appendChild(createNavbar())

homePage()

// let b = document.getElementById('content')

// // b.addEventListener('scroll', function(e) {
// //   // last_known_scroll_position = window.scrollY;
// //   console.log('hellloooo');
// // });

// b.onscroll = () => {
// }

// function btnScroll(pos) {
//   console.log('adasdfsd');
// }

// window.onscroll = () => {
//   btnScroll(window.scrollY)
// }