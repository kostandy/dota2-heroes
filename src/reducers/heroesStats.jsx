import {
  FETCH_HEROES_STATS_BEGIN,
  FETCH_HEROES_STATS_SUCCESS,
  FETCH_HEROES_STATS_FAILURE,
} from '../actions/heroesStats';

const initialState = {
  heroes: [],
  loading: true,
  error: null,
};

export default function heroesStatsReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_HEROES_STATS_BEGIN:
    // Mark the state as "loading" so we can show a spinner or something
    // Also, reset any errors. We're starting fresh.
    return {
      ...state,
      loading: true,
      error: null,
    };

  case FETCH_HEROES_STATS_SUCCESS:
    // All done: set loading "false".
    // Also, replace the items with the ones from the server
    return {
      ...state,
      loading: false,
      heroes: action.payload.heroes,
    };

  case FETCH_HEROES_STATS_FAILURE:
    // The request failed, but it did stop, so set loading to "false".
    // Save the error, and we can display it somewhere
    // Since it failed, we don't have items to display anymore, so set it empty.
    // This is up to you and your app though: maybe you want to keep the items
    // around! Do whatever seems right.
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      heroes: {},
    };

  default:
    // ALWAYS have a default case in a reducer
    return state;
  }
}
