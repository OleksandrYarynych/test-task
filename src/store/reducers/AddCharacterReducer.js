import { addCharactersActionTypes } from "../actionTypes";

const initState = [];

export const AddCharacterReducer = (state = initState, action) => {
  switch (action.type) {
    case addCharactersActionTypes.ADD_CHARACTER:
      return [action.payload, ...state];
    default:
      return state;
  }
};
