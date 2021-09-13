import { configureStore } from '@reduxjs/toolkit';
import { isLoggedIn, user, foodlog } from './reducers/reducers';

const store = configureStore({
  reducer: {
    isLoggedIn,
    user,
    foodlog
  },
});

export default store;