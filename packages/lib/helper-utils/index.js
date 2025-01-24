export { default as debounce } from 'lodash.debounce';
export { default as throttle } from 'lodash.throttle';
export const reducer = (currentState, updates) => ({
    ...currentState,
    ...updates,
});
