import detail_mock_data from '../../../article_detail_mock_data.json';
import './DetailPage.css';
import { getCurrentPathName } from '../../router';
import { DetailArticle } from '../../shared/interfaces/article.interface';

function DetailPage() {
  const id = Number(getCurrentPathName()?.split('/')[2]);
  const articleData = detail_mock_data.find(
    (mockData: DetailArticle) => mockData.id == id
  );

  return `
    <div class="detail-page-wrapper">
  <div class="detail-header">
    <img class="detail-header__img" src='${articleData?.image}'/>
    <span class="detail-header__title">${articleData?.title}</span>
    <div class="detail-header__user-info">
      <img class="user__img" src='${articleData?.author.image}'/>
      <div>
        <span class="user__name">${articleData?.author.name}</span>
        <span>ㆍ</span>
        <span class="user__job">${articleData?.author.job}</span>
        <div class="user__upload-date">${articleData?.date}</div>
      </div>
    </div>
  </div>
  <div class="detail__content">${articleData?.detail}</div>
</div>
    `;
}

export default DetailPage;
