import { combineReducers } from 'redux';
import serverStatisticReducer from './serverStatistics';
import heroesStatsReducer from './heroesStats';

export default combineReducers({
  serverStatisticReducer,
  heroesStatsReducer,
});
