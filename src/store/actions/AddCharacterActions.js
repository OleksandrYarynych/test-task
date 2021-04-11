import { addCharactersActionTypes } from "../actionTypes";

export const addCharacter = (character) => {
  return function (dispatch) {
    dispatch({
      type: addCharactersActionTypes.ADD_CHARACTER,
      payload: character,
    });
  };
};
