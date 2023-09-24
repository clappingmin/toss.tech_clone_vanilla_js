import './Article.css';
import { Article } from '../../shared/interfaces/article.interface';

class ArticleComponent {
  private newArticle: Article;

  constructor(newArticle: Article) {
    this.newArticle = newArticle;
  }

  render() {
    return `
    <a href='/article/${this.newArticle.id}' class="article-wrapper">
  <img class="article-image" src='${this.newArticle.image}' alt='${this.title}-image'/>
  <div class="content">
    <span class="content__title">${this.newArticle.title}</span>
    <span class="content__detail">${this.newArticle.detail}</span>
    <span class="content_date">${this.newArticle.date}</span>
  </div>
</a>
    `;
  }
}

export default ArticleComponent;
