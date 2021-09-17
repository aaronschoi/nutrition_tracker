import { configureStore } from '@reduxjs/toolkit';
import { isLoggedIn, user, foodlog, targetFood, users, errors, panel } from './reducers/reducers';

const store = configureStore({
  reducer: {
    isLoggedIn,
    user,
    foodlog,
    targetFood,
    users,
    errors,
    panel,
  },
});

export default store;