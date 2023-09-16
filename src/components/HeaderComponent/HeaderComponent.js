import './HeaderComponent.css';

class HeaderComponent {
  constructor() {
    console.log('헤더 생성이다용');
  }

  render() {
    return `
    <nav class="header-wrapper">
    <img class="logo" src="../../assets/logo.svg" />
    <ul class="button-container">
      <li><a class="button--clear">디자인</a></li>
      <li><a class="button--clear">개발</a></li>
      <li><a class="button--primary">채용 바로가기</a></li>
    </ul>
  </nav>
  `;
  }
}

export default HeaderComponent;
