import axios from "axios";

export const TYPES = {
  LOAD_SUB_REDDIT: "LOAD_SUB_REDDIT",
  SEARCH_REDDITS: "SEARCH_REDDITS",
  SET_BUSY: "SET_BUSY",
  CLEAR_REDDIT_STORE: "CLEAR_REDDIT_STORE",
  LOAD_MORE_REDDITS: "LOAD_MORE_REDDITS",
  LOAD_COMMENTS: "LOAD_COMMENTS",
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

export const searchReddits = (searchTerm = "suomi") => {
  return async (dispatch, getState) => {
    let after,
      children = [];
    try {
      dispatch(setBusy(true));
      const response = await axios.get(
        `https://www.reddit.com/search.json?q=${searchTerm}`,
      );
      children = response.data.data.children;
      after = response.data.data.after;
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: TYPES.SEARCH_REDDITS,
      children,
      after,
      searchTerm,
    });
    dispatch(setBusy(false));
  };
};

export const loadMoreReddits = () => {
  return async (dispatch, getState) => {
    const after = getState().reddits.after;
    const searchTerm = getState().reddits.searchTerm;
    let nextAfter = null,
      children = [];
    if (after) {
      try {
        const response = await axios.get(
          `https://www.reddit.com/search.json?q=${searchTerm}&count=25&after=${after}`,
        );
        children = response.data.data.children;
        nextAfter = response.data.data.after;
      } catch (error) {
        console.log(error);
      }
    }
    dispatch({
      type: TYPES.LOAD_MORE_REDDITS,
      children,
      after: nextAfter,
    });
  };
};

export const loadComments = (permalink) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `https://www.reddit.com/${permalink}.json`,
      );
      const comments = response.data;
      dispatch({
        type: TYPES.LOAD_COMMENTS,
        comments,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSubReddit = (subReddit = "r/suomi") => {
  return async (dispatch, getState) => {
    let after,
      children = [];
    dispatch(setBusy(true));
    try {
      const response = await axios.get(
        `https://www.reddit.com/${subReddit}.json`,
      );
      children = response.data.data.children;
      after = response.data.data.after;
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: TYPES.LOAD_SUB_REDDIT,
      children,
      after,
    });
    dispatch(setBusy(false));
  };
};
