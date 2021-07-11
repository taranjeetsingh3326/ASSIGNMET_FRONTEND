import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from './reducers'

const persistConfig = {
	key: "root",
	version: 1,
	storage: storage,
	whitelist: ["auth"],
};

export default function configureStore(preloadedState) {
 const middlewares = [thunkMiddleware]
 const middlewareEnhancer = applyMiddleware(...middlewares)

 const enhancers = [middlewareEnhancer]
 const composedEnhancers = composeWithDevTools(...enhancers)

 const persistedReducer = persistReducer(persistConfig, rootReducer);

 const store = createStore(persistedReducer, preloadedState, composedEnhancers);
 let persistor = persistStore(store)

 return { store, persistor }
}