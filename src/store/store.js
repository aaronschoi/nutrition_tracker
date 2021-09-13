import { configureStore } from '@reduxjs/toolkit';
import { isLoggedIn, user, foodlog, targetFood, users } from './reducers/reducers';

const store = configureStore({
  reducer: {
    isLoggedIn,
    user,
    foodlog,
    targetFood,
    users
  },
});

export default store;