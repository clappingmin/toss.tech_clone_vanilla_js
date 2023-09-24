import { pageTypeToName } from './../../shared/enums/global.enum';
import './MainPage.css';
import Article from '../../components/Article/Article';
import articles_mock_data from '../../../article_mock_data.json';
import { getCurrentPathName } from '../../router';

function MainPage() {
  const pageType =
    pageTypeToName[getCurrentPathName().replace('/', '')] ||
    pageTypeToName['tech'];

  return `
    <div class="main-page-wrapper">
    <div class="page-type">${pageType}</div>
    <div class="articles-container">
      ${articles_mock_data.map((articleData) => {
        return Article(articleData);
      })}
    </div>
  </div>
    `;
}

export default MainPage;
