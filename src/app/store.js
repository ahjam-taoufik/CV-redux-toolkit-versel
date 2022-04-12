import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsReducer,
    users: usersReducer,
  },
});
