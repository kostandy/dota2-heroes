import { SET_CURRENT_VIEW } from '../actions/filters';

const initialState = {
  currentView: 'row',
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
  case SET_CURRENT_VIEW:
    return {
      ...state,
      currentView: action.payload.currentView,
    };

  default:
    return state;
  }
}
