export type User = {
  id: string;
  nickname: string;
  dateOfBirth: string;
  country: string;
  image?: string;
  sex: string;
  isAgree: boolean;
};

export type ImageItem = {
  id: string;
  alt_description: string;
  color: string;
  created_at: string;
  likes: number;
  urls: {
    [key: string]: string;
  };
  user: {
    username: string;
  };
};

export type SearchResponse = {
  total: number;
  total_pages: number;
  results: ImageItem[];
};
