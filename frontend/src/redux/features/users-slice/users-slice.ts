import { createSlice } from '@reduxjs/toolkit';
import { UsersCollectionState, InitialState } from './users-slice.types';

const initialState = {
  users: [
    {
      username: 'victor',
      state: 'ES',
      score: 5,
    },
  ] as UsersCollectionState[],
} as InitialState;

export const usersCollection = createSlice({
  name: 'user-collection',
  initialState,
  reducers: {
    callTest: () => {
      return initialState;
    },
  },
});

export const { callTest } = usersCollection.actions;
export default usersCollection.reducer;
