import { combineReducers } from 'redux';
import serverStatisticReducer from './serverStatistics';
import heroesStatsReducer from './heroesStats';
import filtersReducer from './filters';

export default combineReducers({
  serverStatisticReducer,
  heroesStatsReducer,
  filtersReducer,
});
