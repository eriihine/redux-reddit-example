import axios from "axios";

export const getReddits = () => {
  return async (dispatch, getState) => {
    const subreddit = "suomi";
    const response = await axios.get(
      `https://www.reddit.com/r/${subreddit}.json`
    );
    dispatch({ type: "FETCH_REDDITS", payload: response.data.data.children });
  };
};
