import './MainPage.css';
import ArticleComponent from '../../components/ArticleComponent/ArticleComponent';
import articles_mock_data from '../../../article_mock_data.json';
import { getCurrentPathName } from '../../router';

class MainPage {
  constructor() {
    switch (getCurrentPathName()) {
      case '/design':
        this.pageType = '디자인';
        break;
      default:
        this.pageType = '기술';
    }
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

    for (let mock_article of articles_mock_data) {
      const title = mock_article.title;
      const detail = mock_article.detail;
      const date = mock_article.date;
      const image = mock_article.image;

      const article = new ArticleComponent(title, detail, date, image);
      articles += article.render();
    }

    return articles;
  }
}

export default MainPage;
