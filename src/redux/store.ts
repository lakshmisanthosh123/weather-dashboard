
import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers/cityReducer';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    city: cityReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;