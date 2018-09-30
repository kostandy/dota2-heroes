export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW';

export const setCurrentView = view => ({
  type: SET_CURRENT_VIEW,
  payload: { currentView: view },
});

export const changeView = view => (dispatch) => {
  dispatch(setCurrentView(view));
};
