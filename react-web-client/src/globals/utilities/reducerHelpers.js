import set from 'lodash/set';

// Pass payload to a defined value within state.formData
export const assignToDynamicFormField = (state, { payload }) => { set(state.formData, payload.field, payload.value); };
// Pass payload to a defined value within a dynamic field on the state
export const assignToDynamicField = (state, { payload }) => { set(state, payload.field, payload.value); };
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
