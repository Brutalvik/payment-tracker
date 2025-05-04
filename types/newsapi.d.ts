declare module "newsapi" {
  interface TopHeadlinesOptions {
    country?: string;
    category?: string;
    sources?: string;
    q?: string;
    pageSize?: number;
    page?: number;
  }

  interface Article {
    source: { id?: string; name?: string };
    author?: string;
    title: string;
    description?: string;
    url: string;
    urlToImage?: string;
    publishedAt?: string;
    content?: string;
  }

  interface TopHeadlinesResponse {
    status: string;
    totalResults: number;
    articles: Article[];
  }

  export default class NewsAPI {
    constructor(apiKey: string);
    v2: {
      topHeadlines(options: TopHeadlinesOptions): Promise<TopHeadlinesResponse>;
    };
  }
}
