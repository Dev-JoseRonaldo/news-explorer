import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../reducers/searchReducer';

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
