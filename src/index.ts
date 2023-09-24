import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { router } from './router';

const header = new Header();
const footer = new Footer();

document.addEventListener('DOMContentLoaded', () => {
  (document.querySelector('#header') as Element).innerHTML = header.render();
  (document.querySelector('#footer') as Element).innerHTML = footer.render();
});

router();
