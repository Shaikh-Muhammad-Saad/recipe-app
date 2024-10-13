// ** Toolkit imports
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


// ** Reducers
import modal from './slices/modal';
import recipe from './slices/recipes';


// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['recipe'], // list of slicies that need to be persisted
  blacklist: ['modal'], // list of slicies that do not need to be persisted
};

// Combine reducers
const rootReducer = combineReducers({
  modal: modal,
  recipe: recipe,
});


// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
});

// Export persistor to be used with PersistGate
export const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type RootStateModal = RootState["modal"];