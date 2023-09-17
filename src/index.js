import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import { router } from './router';

const header = new HeaderComponent();
const footer = new FooterComponent();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#header').innerHTML = header.render();
  document.querySelector('#footer').innerHTML = footer.render();
});

router();
