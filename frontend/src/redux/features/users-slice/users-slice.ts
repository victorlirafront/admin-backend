import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersCollectionState, InitialState } from './users-slice.types';

const initialState = {
  users: [] as UsersCollectionState[],
} as InitialState;

export const usersCollection = createSlice({
  name: 'user-collection',
  initialState,
  reducers: {
    callTest: () => {
      return initialState;
    },
    setUsers: (state, action: PayloadAction<UsersCollectionState[]>) => {
      state.users = action.payload;
    },
  },
});

export const { callTest, setUsers } = usersCollection.actions;
export default usersCollection.reducer;
