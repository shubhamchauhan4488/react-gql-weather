import set from 'lodash/set';

// Passes payload or a defined value directly to field on the state
export const assignToField = (field, value) => (state, { payload }) => { set(state, field, value ?? payload); };

/**
 * Call multiple functions to set fields on the state within a reducer
 * @param  {...any} args
 */
export const composeReducer = (...args) => (state, action) => {
  args.forEach((arg) => {
    arg(state, action);
  });
};
