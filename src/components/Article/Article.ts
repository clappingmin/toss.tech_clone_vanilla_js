import './Article.css';
import { IArticle } from '../../shared/interfaces/article.interface';

function Article(newArticle: IArticle) {
  return `
    <a href='/article/${newArticle.id}' class="article-wrapper">
  <img class="article-image" src='${newArticle.image}' alt='${newArticle.title}-image'/>
  <div class="content">
    <span class="content__title">${newArticle.title}</span>
    <span class="content__detail">${newArticle.detail}</span>
    <span class="content_date">${newArticle.date}</span>
  </div>
</a>
    `;
}

export default Article;
