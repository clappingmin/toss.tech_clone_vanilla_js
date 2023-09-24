export interface Article {
  id: number;
  title: string;
  detail: string;
  date: string;
  image: string;
}

export interface DetailArticle extends Article {
  author: {
    name: string;
    job: string;
    image: string;
  };
}
