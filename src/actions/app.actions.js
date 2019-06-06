export const TYPES = {
  APP_SET_IMAGE_FILTER: "APP_SET_IMAGE_FILTER",
};

export const setFilterImages = () => async (dispatch, getState) => {
  dispatch({
    type: TYPES.APP_SET_IMAGE_FILTER,
    status: !getState().app.filterImages,
  });
};
