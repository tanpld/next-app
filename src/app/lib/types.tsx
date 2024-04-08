export type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type User = {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: UserAddress;
};

export type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

export type Comment = {
  id: string;
  postId: string;
  name: string;
  email: string;
  body: string;
};
