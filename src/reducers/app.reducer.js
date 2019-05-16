import {TYPES} from '../actions/app.actions';

const INITIAL_STATE = {
  filterImages: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.APP_SET_IMAGE_FILTER: {
      return Object.assign({}, state, {filterImages: action.status});
    }
    default: {
      return state;
    }
  }
};
