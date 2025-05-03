const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else {
    return state; // always return the current state by default
  }
};

export default counterReducer;