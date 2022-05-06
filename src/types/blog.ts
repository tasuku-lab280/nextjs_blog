import type { Category } from 'types/Category';

export type Blog = {
  title: string;
  body: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  publishedAt: string;
  category: Category;
};
