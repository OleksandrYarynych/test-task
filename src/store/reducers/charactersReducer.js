import { charactersActionTypes } from "../actionTypes";

const initState = {
  page: 1,
  characters: [],
  isLoading: false,
  limit: 12,
  error: false,
  singleCharacter: null,
  episodesForSingleCharacter: [],
  sortSelectValue: "",
};

export const charactersReducer = (state = initState, action) => {
  switch (action.type) {
    case charactersActionTypes.SET_LIMIT:
      return { ...state, limit: action.payload };
    case charactersActionTypes.FETCH_ALL_CHARACTERS:
      return { ...state, isLoading: true, page: action.payload };
    case charactersActionTypes.FETCH_ALL_CHARACTERS_COMPLETED:
      return { ...state, isLoading: false, characters: action.payload };
    case charactersActionTypes.FETCH_ALL_CHARACTERS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case charactersActionTypes.FETCH_SINGLE_CHARACTER:
      return {
        ...state,
        singleCharacter: action.payload.character,
        episodesForSingleCharacter: action.payload.episodes,
      };
    case charactersActionTypes.SET_SELECT_VALUE:
      return { ...state, sortSelectValue: action.payload };
    case charactersActionTypes.SWAP_ARRAYS:
      return { ...state, characters: action.payload };
    default:
      return state;
  }
};
