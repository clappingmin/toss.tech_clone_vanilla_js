import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import MainPage from './pages/MainPage/MainPage';
import FooterComponent from './components/FooterComponent/FooterComponent';

const header = new HeaderComponent();
const mainPage = new MainPage('tech');
const footer = new FooterComponent();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#header').innerHTML = header.render();
  document.querySelector('#app').innerHTML = mainPage.render();
  document.querySelector('#footer').innerHTML = footer.render();
});
