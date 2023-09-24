import detail_mock_data from '../../../article_detail_mock_data.json';
import './DetailPage.css';
import { getCurrentPathName } from '../../router';

class DetailPage {
  constructor() {
    this.id = getCurrentPathName()?.split('/')[2];

    if (this.id) this.articleData = this.getData(this.id);
  }

  getData(id) {
    return detail_mock_data.find((mockData) => mockData.id == id);
  }

  render() {
    return `
    <div class="detail-page-wrapper">
  <div class="detail-header">
    <img class="detail-header__img" src='${this.articleData.image}'/>
    <span class="detail-header__title">${this.articleData.title}</span>
    <div class="detail-header__user-info">
      <img class="user__img" src='${this.articleData.autor.image}'/>
      <div>
        <span class="user__name">${this.articleData.autor.name}</span>
        <span>ㆍ</span>
        <span class="user__job">${this.articleData.autor.job}</span>
        <div class="user__upload-date">${this.articleData.date}</div>
      </div>
    </div>
  </div>
  <div class="detail__content">${this.articleData.detail}</div>
</div>
    `;
  }
}

export default DetailPage;
