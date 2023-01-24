import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as endpoints from "api/index";
import { StateProps } from "types/types";

const initialState: StateProps = {
  users: [],
  comments: [],
  albums: [],
  status: "",
  isAlbumModalVisible: false,
};

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    const response = await endpoints.getAllUsers();
    return response;
  }
);

export const fetchUserComments = createAsyncThunk(
  "comments/fetchUserComments",
  async (id: number) => {
    const response = await endpoints.getComments(id);

    return response;
  }
);

export const fetchUserAlbums = createAsyncThunk(
  "albums/fetchUserAlbums",
  async (id: number) => {
    const response = await endpoints.getAlbums(id);
    return response;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    handleUsers(state, action) {
      state.users = action.payload;
    },
    handleComments(state, action) {
      state.comments = action.payload;
    },
    handleAlbums(state, action) {
      state.albums = action.payload;
    },
    onAlbumModalVisible(state) {
      state.isAlbumModalVisible = true;
    },
    offAlbumModalVisible(state) {
      state.isAlbumModalVisible = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = "finished";
        usersSlice.caseReducers.handleUsers(state, action);
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchUserComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserComments.fulfilled, (state, action) => {
        state.status = "finished";
        usersSlice.caseReducers.handleComments(state, action);
      })
      .addCase(fetchUserComments.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchUserAlbums.fulfilled, (state, action) => {
        state.status = "finished";
        usersSlice.caseReducers.handleAlbums(state, action);
      })
      .addCase(fetchUserAlbums.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const { onAlbumModalVisible, offAlbumModalVisible } = usersSlice.actions;
export default usersSlice.reducer;
