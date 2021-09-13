import { configureStore } from '@reduxjs/toolkit';
import { isLoggedIn, user, foodlog, targetFood } from './reducers/reducers';

const store = configureStore({
  reducer: {
    isLoggedIn,
    user,
    foodlog,
    targetFood
  },
});

export default store;