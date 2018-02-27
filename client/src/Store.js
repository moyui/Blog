import { createStore, combineReducers, compose, applyMiddleWare } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { reducer as articleNumReducer } from './articles-fetch-wrap/';
import { reducer as articleInfoReducer } from './articles/';

const win = window;

const reducer = combineReducers({
  articleNum: articleNumReducer,
  articleInfo: articleInfoReducer,
});

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
  applyMiddleWare(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);

