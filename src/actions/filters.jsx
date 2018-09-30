export const SET_FILTERED_HEROES = 'SET_FILTERED_HEROES';
export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW';

export const setFilteredHeroes = filteredHeroes => ({
  type: SET_FILTERED_HEROES,
  payload: { filteredHeroes },
});

export const setCurrentView = view => ({
  type: SET_CURRENT_VIEW,
  payload: { currentView: view },
});

export const filterByHeroNames = (heroes, names) => (dispatch) => {
  const filteredHeroes = names.map(name => heroes.find(hero => hero.localized_name === name));
  dispatch(setFilteredHeroes(filteredHeroes));
};

export const changeView = view => (dispatch) => {
  dispatch(setCurrentView(view));
};
