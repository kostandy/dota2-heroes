import {
  SET_FILTERED_HEROES,
  CHANGE_VIEW,
} from '../actions/filters';

const initialState = {
  filteredHeroes: [],
  currentView: 'row',
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
  case SET_FILTERED_HEROES:
    return {
      ...state,
      filteredHeroes: action.payload.filteredHeroes,
    };

  case CHANGE_VIEW:
    return { ...state };

  default:
    return state;
  }
}
