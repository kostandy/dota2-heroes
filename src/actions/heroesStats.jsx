export const FETCH_HEROES_STATS_BEGIN = 'FETCH_HEROES_STATS_BEGIN';
export const FETCH_HEROES_STATS_SUCCESS = 'FETCH_HEROES_STATS_SUCCESS';
export const FETCH_HEROES_STATS_FAILURE = 'FETCH_HEROES_STATS_FAILURE';

export const fetchHeroesStatsBegin = () => ({
  type: FETCH_HEROES_STATS_BEGIN,
});

export const fetchHeroesStatsSuccess = heroes => ({
  type: FETCH_HEROES_STATS_SUCCESS,
  payload: { heroes },
});

export const fetchHeroesStatsError = error => ({
  type: FETCH_HEROES_STATS_FAILURE,
  payload: { error },
});

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const fetchHeroesStats = () => (dispatch) => {
  dispatch(fetchHeroesStatsBegin());
  return fetch('https://api.opendota.com/api/heroStats')
    .then(handleErrors)
    .then(res => res.json())
    .then((json) => {
      const sortedJson = json.sort((a, b) => {
        const keyA = String(a.localized_name);
        const keyB = String(b.localized_name);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      dispatch(fetchHeroesStatsSuccess(sortedJson));
      return json;
    })
    .catch(error => dispatch(fetchHeroesStatsError(error)));
};

export default fetchHeroesStats;
