import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import MainPage from './pages/MainPage/MainPage';

const header = new HeaderComponent();
const mainPage = new MainPage();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#header').innerHTML = header.render();
  document.querySelector('#app').innerHTML = mainPage.render();
});
