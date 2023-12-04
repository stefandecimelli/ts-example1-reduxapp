import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducer/user-reducer';

export const store = configureStore({
  reducer: combineReducers({
    user: userReducer
  })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
