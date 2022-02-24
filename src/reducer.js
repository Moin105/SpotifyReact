export const initialState = {
  user: null,
  tracks: [],
  playlists: [],
  playing: false,
  item: null,
  token: null,
  search_result: [],
};

const reducer = (state, action) => {
  // console.log(">>>>>>>>>>>>>>>", state);
  console.log("^^^^^^^^^^^^^", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_TRACKS":
      return {
        ...state,
        tracks: action.tracks,
      };
    case "SET_CATEGORY_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_SEARCH_RESULT":
      return {
        ...state,
        search: action.search,
      };
    default:
      return state;
  }
};
export default reducer;
