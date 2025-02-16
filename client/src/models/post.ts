export type IPost = {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string; // ISO timestamp format
  updatedAt: string; // ISO timestamp format
};

export type IPostState = {
  posts: IPost[];
  postsByUser: IPost[];
  selectedPost: IPost | undefined;
  createPostStatus: string;
  createPostSuccess: boolean;
  createPostError: boolean;
  getPostStatus: string;
  getPostSuccess: boolean;
  getPostError: boolean;
  getPostByUserStatus: string;
  getPostByUserSuccess: boolean;
  getPostByUserError: boolean;
};
