import HeaderComponent from './components/HeaderComponent/HeaderComponent';

const header = new HeaderComponent();

document.querySelector('#app').innerHTML = `
  <div>
  </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#header').innerHTML = header.render();
});
