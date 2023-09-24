import './Header.css';

function Header() {
  return `
    <nav class="header-wrapper">
    <a href='/'><img class="logo" src="/public/icon-logo.svg" /></a>
    <ul class="button-container">
      <li><a href='/design' class="button--clear">디자인</a></li>
      <li><a href='/tech' class="button--clear">개발</a></li>
      <li><a href='https://toss.im/career/jobs' class="button--primary">채용 바로가기</a></li>
    </ul>
  </nav>
  `;
}

export default Header;
