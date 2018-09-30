import {
  SET_FILTERED_HEROES,
  SET_CURRENT_VIEW,
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

  case SET_CURRENT_VIEW:
    return {
      ...state,
      currentView: action.payload.currentView,
    };

  default:
    return state;
  }
}
