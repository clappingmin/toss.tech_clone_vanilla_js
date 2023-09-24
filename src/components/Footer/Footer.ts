import './Footer.css';

class FooterComponent {
  constructor() {}

  render() {
    return `
    <div class="footer-wrapper">
    <div class="footer-site-group">
      <div class="footer-site-box">
        <span class="footer-site-group__title">토스테크</span>
        <a class="footer-site-group__item">의견 보내기</a>
      </div>
      <div class="footer-site-box">
        <span class="footer-site-group__title">토스</span>
        <a class="footer-site-group__item">홈페이지</a>
        <a class="footer-site-group__item">회사 소개</a>
        <a class="footer-site-group__item">채용</a>
      </div>
      <div class="footer-site-box">
        <a class="footer-site-group__title">고객센터</a>
        <a class="footer-site-group__item">전화: 1599-4905 (24시간 연중무휴)</a>
        <a class="footer-site-group__item">이메일: support@toss.im</a>
        <a class="footer-site-group__item">카카오톡: @toss</a>
      </div>
    </div>
    <div class="footer-address">
      <span class="footer-address__company-name">㈜비바리퍼블리카</span>
      <span class="footer-address__copy-right">Copyright © Viva Republica, Inc. All Rights Reserved.</span>
    </div>
    <ul class="footer-social">
      <li class="footer-social__item">
        <a><img src="/public/icon-facebook.svg" /></a>
      </li>
      <li class="footer-social__item">
        <a><img src="/public/icon-blog.svg" /></a>
      </li>
      <li class="footer-social__item">
        <a><img src="/public/icon-naver.svg" /></a>
      </li>
      <li class="footer-social__item">
        <a><img src="/public/icon-twitter.svg" /></a>
      </li>
      <li class="footer-social__item">
        <a><img src="/public/icon-instagram.svg" /></a>
      </li>
    </ul>
  </div>
    `;
  }
}

export default FooterComponent;
