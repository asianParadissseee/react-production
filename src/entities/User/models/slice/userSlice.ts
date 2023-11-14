import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
    authData: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
