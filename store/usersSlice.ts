// src/redux/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/userInterface';

interface UsersState {
  users: IUser[];
  selectedUser?: IUser;
}

const initialState: UsersState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserList(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.selectedUser = action.payload;
    },
    deleteUserFromList(state, action: PayloadAction<string>) {
      const index = state.users.findIndex(user => user._id === action.payload);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
    updateUserList(state, action: PayloadAction<IUser>) {
      const index = state.users.findIndex(user => user._id === action.payload._id);
      if (index !== -1) {
        state.users[index] = action.payload;
      } else {
        state.users.push(action.payload);
      }
    },
    resetUsers(state) {
      state.users = [];
    },
  },
});

export const {
  setUser,
  setUserList,
  deleteUserFromList,
  updateUserList,
  resetUsers,
} = userSlice.actions;

export default userSlice.reducer;



