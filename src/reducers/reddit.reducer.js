import {TYPES} from "../actions/reddit.actions";

const INITIAL_STATE = {
  data: [],
  loading: false,
  after: null,
  searchTerm: "suomi",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.LOAD_MORE_REDDITS: {
      return Object.assign({}, state, {
        data: state.data.concat(action.children),
        after: action.after,
      });
    }

    case TYPES.RANDOM_SEARCH: {
      return Object.assign({}, state, {randomTerm: action.searchTerm});
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
    default: {
      return state;
    }
  }
};
