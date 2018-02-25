import { createStore, combineReducers, compose, applyMiddleWare } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { reducer as MainBodyReducer } from './MainBody/';

const win = window;

const reducer = combineReducers({
  mainbody: MainBodyReducer
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

