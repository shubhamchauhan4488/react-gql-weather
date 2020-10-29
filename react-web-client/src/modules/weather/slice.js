import { createSlice } from '@reduxjs/toolkit';
import { assignToField, composeReducer } from '../../globals/utilities/reducerHelpers';

const reducers = {
  FETCH_CITY_REQUEST: assignToField('isFetching', true),
  FETCH_CITY_SUCCESS: composeReducer(
    assignToField('isFetching', false),
    assignToField('isDirty', true),
  ),
  SET_CITY: composeReducer(
    assignToField('city'),
  ),
  FETCH_CITY_FAILURE: (state, { payload }) => {
    state.isFetching = false;
    state.cityFetchError = payload;
    state.isDirty = false;
  },
  SET_WEATHER_DATA: (state, { payload }) => {
    state.isFetching = payload.loading;
    state.data = payload.data;
    state.error = payload.error;
  },
};

const weatherSlice = createSlice({
  name: 'weather',
  reducers,
  initialState: {
    city: '',
    data: null,
    isFetching: false,
    isDirty: false,
    error: '',
    cityFetchError: '',
  },
});

const { reducer } = weatherSlice;
const weatherActions = weatherSlice.actions;

/** Exporting reducers and actions */
export {
  weatherActions,
  reducer,
};
