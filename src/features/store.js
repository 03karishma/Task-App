import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer'; // Adjust the path as per your project structure

export const store = configureStore({
    reducer: {
        users: reducer,
    },
});
