import axios from 'axios';

export const TYPES = {
  LOAD_REDDITS: 'LOAD_REDDITS',
  SEARCH_REDDITS: 'SEARCH_REDDITS',
};

export const getReddits = (searchTerm = 'r/suomi') => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `https://www.reddit.com/search.json?q=${searchTerm}`
    );
    dispatch({
      type: TYPES.LOAD_REDDITS,
      payload: response.data.data.children,
    });
  };
};

