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
  nickname: string;
  dateOfBirth: string;
  country: string;
  image?: string;
  sex: string;
  isAgree: boolean;
};
