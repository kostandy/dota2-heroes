export const FETCH_SERVER_STATISTICS_BEGIN = 'FETCH_SERVER_STATISTICS_BEGIN';
export const FETCH_SERVER_STATISTICS_SUCCESS = 'FETCH_SERVER_STATISTICS_SUCCESS';
export const FETCH_SERVER_STATISTICS_FAILURE = 'FETCH_SERVER_STATISTICS_FAILURE';

export const fetchServerStatisticsBegin = () => ({
  type: FETCH_SERVER_STATISTICS_BEGIN,
});

export const fetchServerStatisticsSuccess = statistic => ({
  type: FETCH_SERVER_STATISTICS_SUCCESS,
  payload: { statistic },
});

export const fetchServerStatisticsError = error => ({
  type: FETCH_SERVER_STATISTICS_FAILURE,
  payload: { error },
});

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const fetchServerStatistics = () => (dispatch) => {
  dispatch(fetchServerStatisticsBegin());
  return fetch('https://api.opendota.com/api/status')
    .then(handleErrors)
    .then(res => res.json())
    .then((json) => {
      dispatch(fetchServerStatisticsSuccess(json));
      return json;
    })
    .catch(error => dispatch(fetchServerStatisticsError(error)));
};

export default fetchServerStatistics;
