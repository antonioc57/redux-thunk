const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false
};
const ip = (state = INITIAL_STATE, action) => {
  if (action.type === 'LOAD_DATA_REQUEST') {
    return {
      isFetching: true,
      data: [],
      error: false
    };
  } else if (action.type === 'LOAD_DATA_SUCCESS') {
    return {
      isFetching: false,
      data: action.data,
      error: false
    };
  } else if (action.type === 'LOAD_DATA_ERROR') {
    return {
      isFetching: false,
      data: [],
      error: true
    };
  }
  return state;
};
export default ip;
