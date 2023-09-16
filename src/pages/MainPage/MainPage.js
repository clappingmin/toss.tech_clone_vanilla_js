import ArticleComponent from '../../components/ArticleComponent/ArticleComponent';
import articles_mock_data from '../../../article_mock_data.json';

class MainPage {
  constructor() {
    console.log(articles_mock_data);
  }

  render() {
    return this.renderArticles();
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
