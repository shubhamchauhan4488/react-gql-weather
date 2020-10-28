import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import reduxUnhandledAction from 'redux-unhandled-action';
import thunk from 'redux-thunk';
import { reducer as weather } from '../modules/weather';

const store = configureStore({
  reducer: { weather },
  devtools: true,
  middleware: [
    reduxUnhandledAction(({ type }) => console.error(`${type} is fired but the state is not mutated!`)),
    require('redux-immutable-state-invariant').default(),
    thunk,
    createLogger(),
  ],
});

export default store;
