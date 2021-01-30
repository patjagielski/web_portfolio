const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "LOAD_LITERALS":
      return action.payload;
    default:
      return state;
  }
};

export const loadLiterals = literals => ({
  type: "LOAD_LITERALS",
  payload: literals,
});