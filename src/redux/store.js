import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

import rootSage from './userSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];
// mount it on the Store

if (process.env.NODE_ENV === 'development') middleWares.push(logger);

const store = createStore(rootReducer, applyMiddleware(...middleWares));

// then run the saga
sagaMiddleware.run(rootSage);

// render the application

export default store;
