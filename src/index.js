import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Footer/Footer';
import { router } from './router';

const header = new HeaderComponent();
const footer = new FooterComponent();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#header').innerHTML = header.render();
  document.querySelector('#footer').innerHTML = footer.render();
});

router();
