import axios from 'axios';

export const TYPES = {
  LOAD_SUB_REDDIT: 'LOAD_SUB_REDDIT',
  SEARCH_REDDITS: 'SEARCH_REDDITS',
  SET_BUSY: 'SET_BUSY',
  CLEAR_REDDIT_STORE: 'CLEAR_REDDIT_STORE',
};

export const setBusy = (isBusy) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.SET_BUSY,
      isBusy,
    });
  };
};

export const clearRedditStore = () => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.CLEAR_REDDIT_STORE,
    });
  };
};

export const searchReddits = (searchTerm = 'suomi') => {
  return async (dispatch, getState) => {
    let payload = [];
    try {
      dispatch(setBusy(true));
      const response = await axios.get(
        `https://www.reddit.com/search.json?q=${searchTerm}`,
      );
      payload = response.data.data.children;
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: TYPES.SEARCH_REDDITS,
      payload,
    });
    dispatch(setBusy(false));
  };
};

export const getSubReddit = (subReddit = 'r/suomi') => {
  return async (dispatch, getState) => {
    let payload = [];
    dispatch(setBusy(true));
    try {
      const response = await axios.get(
        `https://www.reddit.com/${subReddit}.json`,
      );
      payload = response.data.data.children;
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: TYPES.LOAD_SUB_REDDIT,
      payload,
    });
    dispatch(setBusy(false));
  };
};
