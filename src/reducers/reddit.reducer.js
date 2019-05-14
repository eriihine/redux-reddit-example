import {TYPES} from '../actions/reddit.actions';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.LOAD_REDDITS: {
      return Object.assign({}, state, {data: action.payload});
    }
    default: {
      return state;
    }
  }
};
