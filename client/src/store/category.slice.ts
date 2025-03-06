import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "../services/category";
import { ICategoryState } from "../models";
import { LoadingStates } from "../enums";

const initialState: ICategoryState = {
  categories: [],
  getCategoriesStatus: LoadingStates.IDLE,
  getCategoriesSuccess: false,
  getCategoriesError: false,
  addCategoriesStatus: LoadingStates.IDLE,
  addCategoriesSuccess: false,
  addCategoriesError: false,
  deleteCategoriesStatus: LoadingStates.IDLE,
  deleteCategoriesSuccess: false,
  deleteCategoriesError: false,
};

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = categoryService.getCategories();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCategories = createAsyncThunk(
  "category/addCategories",
  async (payload: { name: string }, thunkAPI) => {
    try {
      const response = categoryService.addCategories(payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteCategories = createAsyncThunk(
  "category/deleteCategories",
  async (id: string, thunkAPI) => {
    try {
      const response = categoryService.deleteCategories(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get
      .addCase(getCategories.pending, (state) => {
        state.getCategoriesStatus = LoadingStates.LOADING;
        state.getCategoriesError = false;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.getCategoriesSuccess = true;
        state.getCategoriesStatus = LoadingStates.SUCCESS;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state) => {
        state.getCategoriesStatus = LoadingStates.FAILURE;
        state.getCategoriesError = true;
      })

      // add
      .addCase(addCategories.pending, (state) => {
        state.addCategoriesStatus = LoadingStates.LOADING;
        state.addCategoriesError = false;
      })
      .addCase(addCategories.fulfilled, (state, action) => {
        state.addCategoriesSuccess = true;
        state.addCategoriesStatus = LoadingStates.SUCCESS;
        state.categories = action.payload;
      })
      .addCase(addCategories.rejected, (state) => {
        state.addCategoriesStatus = LoadingStates.FAILURE;
        state.addCategoriesError = true;
      })

      // delete
      .addCase(deleteCategories.pending, (state) => {
        state.deleteCategoriesStatus = LoadingStates.LOADING;
        state.deleteCategoriesError = false;
      })
      .addCase(deleteCategories.fulfilled, (state, action) => {
        state.deleteCategoriesSuccess = true;
        state.deleteCategoriesStatus = LoadingStates.SUCCESS;
        state.categories = action.payload;
      })
      .addCase(deleteCategories.rejected, (state) => {
        state.deleteCategoriesStatus = LoadingStates.FAILURE;
        state.deleteCategoriesError = true;
      });
  },
});

// export const {  } = CategorySlice.actions;
export default CategorySlice.reducer;
