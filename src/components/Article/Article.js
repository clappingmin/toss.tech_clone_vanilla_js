import './Article.css';

class ArticleComponent {
  constructor(id, title, detail, date, image) {
    this.id = id;
    this.title = title;
    this.detail = detail;
    this.date = date;
    this.image = image;
  }

  render() {
    return `
    <a href='/article/${this.id}' class="article-wrapper">
  <img class="article-image" src='${this.image}' alt='${this.title}-image'/>
  <div class="content">
    <span class="content__title">${this.title}</span>
    <span class="content__detail">${this.detail}</span>
    <span class="content_date">${this.date}</span>
  </div>
</a>
    `;
  }
}

export default ArticleComponent;
