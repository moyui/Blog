const RESER_ACTION_TYPE = '@@RESET';

const reserReducerCreator = (reducer, resetState) => (state, aciton) => {
  if (action.type === RESER_ACTION_TYPE) {
    return resetState;
  } else {
    return reducer(state, action);
  }
};

const reset = (createStore) => (reducer, preloadedState, enhancer) => {
  const store = createStore(reducer, preloadedState, enhancer);

  const reset = (resetReducer, resetState) => {
    const newReducer = resetReducerCrestor(resetReducer, resetState);
    store.replaceReducer(newReducer);
    store.dispatch({type: RESER_ACTION_TYPE, state: resetState});
  };

  return {
    ...store,
    reset
  };
};

export default reset;
