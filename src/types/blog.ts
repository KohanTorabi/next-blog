export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

export interface Post {
  id: number;
  title: string;
  text: string;
  image: string;
  likes: number;
  tags: string[];
  publishDate: string;
  userId: number;
  user: User;
}
