import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IClient{
  _id: string;
  username: string;
  name: string;
  email: string;
  token?: string | null;
}

const initialState: IClient = {
  _id: "",
  username: "",
  name: "",
  email: "",
  token: null,
};

export const clientSlice = createSlice({
  name: "clientData",
  initialState,
  reducers: {
    setClientData: (state, action: PayloadAction<IClient>) => {     
      return { ...state, ...action.payload };
    },
  },
});

export const { setClientData } = clientSlice.actions;

export default clientSlice.reducer;
