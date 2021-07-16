import { configureStore, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { rootReducer } from './reducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useRootDispatch: () => ThunkDispatch<RootState, void, AnyAction> = () => useDispatch<AppDispatch>();

export default store;
