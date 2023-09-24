export interface IArticle {
  id: number;
  title: string;
  detail: string;
  date: string;
  image: string;
}

export interface DetailArticle extends IArticle {
  author: {
    name: string;
    job: string;
    image: string;
  };
}
