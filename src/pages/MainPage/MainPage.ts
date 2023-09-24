import { pageTypeToName } from './../../shared/enums/global.enum';
import './MainPage.css';
import ArticleComponent from '../../components/Article/Article';
import articles_mock_data from '../../../article_mock_data.json';
import { getCurrentPathName } from '../../router';

class MainPage {
  private pageType;

  constructor() {
    this.pageType = pageTypeToName[getCurrentPathName().replace('/', '')];
  }

  render() {
    return `
    <div class="main-page-wrapper">
    <div class="page-type">${this.pageType}</div>
    <div class="articles-container">
      ${this.renderArticles()}
    </div>
  </div>
    `;
  }

  renderArticles() {
    let articles = '';

    articles_mock_data.map((articleData) => {
      const article = new ArticleComponent(articleData);
      articles += article.render();
    });

    return articles;
  }
}

export default MainPage;
