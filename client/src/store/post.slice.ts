import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPostState } from "../models";
import postService from "../services/post";
import { LoadingStates } from "../enums";

const initialState: IPostState = {
  posts: [],
  postsByUser: [],
  createPostStatus: LoadingStates.IDLE,
  createPostSuccess: false,
  createPostError: false,
  updatePostStatus: LoadingStates.IDLE,
  updatePostSuccess: false,
  updatePostError: false,
  getPostStatus: LoadingStates.IDLE,
  getPostSuccess: false,
  getPostError: false,
  getPostByUserStatus: LoadingStates.IDLE,
  getPostByUserSuccess: false,
  getPostByUserError: false,
  selectedPost: undefined,
  selectedPostToEdit: undefined,
  deleteMyPostStatus: LoadingStates.IDLE,
  deleteMyPostSuccess: false,
  deleteMyPostError: false,
};

export const createPosts = createAsyncThunk(
  "posts/create",
  async (payload: FormData, thunkAPI) => {
    try {
      const response = postService.createPost(payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/update",
  async (
    postData: {
      _id: string;
      form: FormData;
    },
    thunkAPI
  ) => {
    try {
      const response = postService.updatePost(postData._id, postData.form);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      const response = postService.getPosts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPostsByUser = createAsyncThunk(
  "posts/getMine",
  async (_, thunkAPI) => {
    try {
      const response = postService.getPostsByUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteMyPost = createAsyncThunk(
  "posts/delete",
  async (postId: string, thunkAPI) => {
    try {
      await postService.deletePost(postId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedPost(state, action) {
      state.selectedPost = action.payload;
    },
    setSelectedPostToEdit(state, action) {
      state.selectedPostToEdit = action.payload;
    },
    clearSelectedPost(state) {
      state.selectedPost = undefined;
    },
    clearSelectedPostToEdit(state) {
      state.selectedPostToEdit = undefined;
    },
    resetPostSuccess(state) {
      state.createPostSuccess = false;
    },
    resetUpdatePostSuccess(state) {
      state.updatePostSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // create
      .addCase(createPosts.pending, (state) => {
        state.createPostStatus = LoadingStates.LOADING;
        state.createPostError = false;
      })
      .addCase(createPosts.fulfilled, (state) => {
        state.createPostSuccess = true;
        state.createPostStatus = LoadingStates.SUCCESS;
      })
      .addCase(createPosts.rejected, (state) => {
        state.createPostStatus = LoadingStates.FAILURE;
        state.createPostError = true;
      })

      // update
      .addCase(updatePost.pending, (state) => {
        state.updatePostStatus = LoadingStates.LOADING;
        state.updatePostError = false;
      })
      .addCase(updatePost.fulfilled, (state) => {
        state.updatePostSuccess = true;
        state.updatePostStatus = LoadingStates.SUCCESS;
      })
      .addCase(updatePost.rejected, (state) => {
        state.updatePostStatus = LoadingStates.FAILURE;
        state.updatePostError = true;
      })

      // get all
      .addCase(getPosts.pending, (state) => {
        state.getPostStatus = LoadingStates.LOADING;
        state.getPostError = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.getPostSuccess = true;
        state.getPostStatus = LoadingStates.SUCCESS;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.getPostStatus = LoadingStates.FAILURE;
        state.getPostError = true;
      })

      // get by user
      .addCase(getPostsByUser.pending, (state) => {
        state.getPostByUserStatus = LoadingStates.LOADING;
        state.getPostByUserError = false;
      })
      .addCase(getPostsByUser.fulfilled, (state, action) => {
        state.getPostByUserSuccess = true;
        state.getPostByUserStatus = LoadingStates.SUCCESS;
        state.postsByUser = action.payload;
      })
      .addCase(getPostsByUser.rejected, (state) => {
        state.getPostByUserStatus = LoadingStates.FAILURE;
        state.getPostByUserError = true;
      })

      // delete post
      .addCase(deleteMyPost.pending, (state) => {
        state.deleteMyPostStatus = LoadingStates.LOADING;
        state.deleteMyPostError = false;
      })
      .addCase(deleteMyPost.fulfilled, (state) => {
        state.deleteMyPostSuccess = true;
        state.deleteMyPostStatus = LoadingStates.SUCCESS;
      })
      .addCase(deleteMyPost.rejected, (state) => {
        state.deleteMyPostStatus = LoadingStates.FAILURE;
        state.deleteMyPostError = true;
      });
  },
});

export const {
  setSelectedPost,
  setSelectedPostToEdit,
  clearSelectedPost,
  clearSelectedPostToEdit,
  resetPostSuccess,
  resetUpdatePostSuccess,
} = PostSlice.actions;
export default PostSlice.reducer;
