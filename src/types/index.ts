export type Item = {
  id: string;
  title: string;
  author: string;
  views: string;
  likes: string;
  createdAt: string;
  img: string;
};

export type User = {
  id: string;
  name: string;
  dateOfBirth: string;
  country: string;
  image?: string;
  sex: string;
  promo: boolean;
};
