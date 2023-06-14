// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from './reducers';

// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import thunk from 'redux-thunk';


const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
