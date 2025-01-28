import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAuthState,
  IUser,
  LoginUserPayload,
  RegisterUserPayload,
} from "../models/auth";
import userService from "../services/auth";
import { LoadingStates } from "../enums";

const initialState: IAuthState = {
  loggedInUser: undefined,
  isAuthenticated: false,
  loginUserStatus: LoadingStates.IDLE,
  loginUserSuccess: false,
  loginUserError: false,
  logoutUserStatus: LoadingStates.IDLE,
  logoutUserSuccess: false,
  logoutUserError: false,
  registerUserStatus: LoadingStates.IDLE,
  registerUserSuccess: false,
  registerUserError: false,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: LoginUserPayload, thunkAPI) => {
    try {
      const response = userService.login(user);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user: RegisterUserPayload, thunkAPI) => {
    try {
      const response = userService.register(user);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      userService.logout();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // login
      .addCase(loginUser.pending, (state) => {
        state.loginUserStatus = LoadingStates.LOADING;
        state.loginUserError = false;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.loginUserSuccess = true;
        console.log(action.payload);
        state.loggedInUser = action.payload;
        state.isAuthenticated = true;
        state.loginUserStatus = LoadingStates.SUCCESS;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loginUserStatus = LoadingStates.FAILURE;
        state.loginUserError = true;
      })

      // register
      .addCase(registerUser.pending, (state) => {
        state.registerUserStatus = LoadingStates.LOADING;
        state.registerUserError = false;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.registerUserStatus = LoadingStates.SUCCESS;
        state.registerUserSuccess = true;
      })
      .addCase(registerUser.rejected, (state) => {
        state.registerUserStatus = LoadingStates.FAILURE;
        state.registerUserError = true;
      })

      // logout reducers
      .addCase(logoutUser.pending, (state) => {
        state.logoutUserStatus = LoadingStates.LOADING;
        state.logoutUserError = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.logoutUserStatus = LoadingStates.SUCCESS;
        state.logoutUserSuccess = true;
        Object.assign(state, initialState);
      })
      .addCase(logoutUser.rejected, (state) => {
        state.logoutUserStatus = LoadingStates.FAILURE;
        state.logoutUserError = true;
      });
  },
});

// export const {} = AuthSlice.actions
export default AuthSlice.reducer;
