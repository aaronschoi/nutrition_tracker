import { configureStore } from '@reduxjs/toolkit';
import { isLoggedIn, user, foodlog, targetFood, users, errors } from './reducers/reducers';

const store = configureStore({
  reducer: {
    isLoggedIn,
    user,
    foodlog,
    targetFood,
    users,
    errors
  },
});

export default store;