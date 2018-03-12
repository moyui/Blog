import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';

import { reducer as articleNumReducer } from './articles-fetch-wrap/';
import { reducer as articleItemsReduer} from './constant/';

const win = window;
export const history = createHistory();

const reducer = combineReducers({
  articleNum: articleNumReducer,
  articleItem: articleItemsReduer,
  router: routerReducer
});

const middlewares = [thunkMiddleware, routerMiddleware(history)];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);

