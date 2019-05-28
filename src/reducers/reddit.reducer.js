import {TYPES} from "../actions/reddit.actions";

const INITIAL_STATE = {
  data: [],
  loading: false,
  after: null,
  searchTerm: "suomi",
  comments: [],
  redditsByAuthor: [],
  author: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.LOAD_MORE_REDDITS: {
      return Object.assign({}, state, {
        data: state.data.concat(action.children),
        after: action.after,
      });
    }
    case TYPES.SET_BUSY: {
      return Object.assign({}, state, {loading: action.isBusy});
    }
    case TYPES.SEARCH_REDDITS: {
      return Object.assign({}, state, {
        data: action.children,
        after: action.after,
        searchTerm: action.searchTerm,
      });
    }
    case TYPES.CLEAR_REDDIT_STORE: {
      return Object.assign({}, state, {data: [], after: undefined});
    }
    case TYPES.LOAD_SUB_REDDIT: {
      return Object.assign({}, state, {
        data: action.children,
        after: action.after,
      });
    }

    case TYPES.LOAD_COMMENTS: {
      return Object.assign({}, state, {
        comments: action.comments,
      });
    }
    case TYPES.LOAD_REDDITS_BY_AUTHOR: {
      return Object.assign({}, state, {
        redditsByAuthor: action.redditsByAuthor,
        author: action.author,
      });
    }
    default: {
      return state;
    }
  }
};
