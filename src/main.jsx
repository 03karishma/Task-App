import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './features/store.js';

// import { configureStore } from '@reduxjs/toolkit';
// import Reducer from './features/reducer';

// const store = configureStore({
//   reducer: {
//     users: Reducer,
//   },
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);