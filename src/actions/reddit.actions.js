import axios from 'axios';

export const TYPES = {
  LOAD_REDDITS: 'LOAD_REDDITS',
};

export const getReddits = () => {
  return async (dispatch, getState) => {
    const subReddit = 'suomi';
    const response = await axios.get(
      //       `https://www.reddit.com/search.json?q=gameofthrones`
      `https://www.reddit.com/r/${subReddit}.json`,
    );
    dispatch({
      type: TYPES.LOAD_REDDITS,
      payload: response.data.data.children,
    });
  };
};
