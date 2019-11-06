import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';

import rootReducer from './rootReducer';
import api from './middleware/api/api';

const configureAppStore = (preloadedState = {}) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: [
      api,
      ...getDefaultMiddleware({
        serializableCheck: false, // to allow non-serializable values in actions
      }),
    ],
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer))
  }

  return store;
}

export default configureAppStore();
