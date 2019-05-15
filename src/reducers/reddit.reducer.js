import {TYPES} from '../actions/reddit.actions';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_BUSY: {
      return Object.assign({}, state, {loading: action.isBusy});
    }
    case TYPES.SEARCH_REDDITS: {
      return Object.assign({}, state, {data: action.payload});
    }
    case TYPES.LOAD_SUB_REDDIT: {
      return Object.assign({}, state, {data: action.payload});
    }
    default: {
      return state;
    }
  }
};
