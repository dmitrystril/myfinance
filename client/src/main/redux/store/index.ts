import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducer';
import api from '../middleware/api';

const configureStore = (preloadedState?: Object) => {
  const middlewares = [api];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(middleWareEnhancer)
  );

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducer', () => {
      const nextRootReducer = require('../reducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export type AppState = ReturnType<typeof rootReducer>;

export default configureStore();
