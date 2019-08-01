export const createLocation = (location) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_LOCATION', location })
  }
};