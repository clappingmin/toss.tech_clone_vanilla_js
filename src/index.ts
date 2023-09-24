import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { router } from './router';

const header = Header();
const footer = Footer();

document.addEventListener('DOMContentLoaded', () => {
  (document.querySelector('#header') as Element).innerHTML = header;
  (document.querySelector('#footer') as Element).innerHTML = footer;
});

router();
