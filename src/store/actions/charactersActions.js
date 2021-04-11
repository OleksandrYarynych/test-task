import axios from "axios";

import { charactersActionTypes } from "../actionTypes";

export const setLimit = (limit) => {
  return {
    type: charactersActionTypes.SET_LIMIT,
    payload: limit,
  };
};

export const setSelectValue = (value) => {
  return function (dispatch) {
    dispatch({
      type: charactersActionTypes.SET_SELECT_VALUE,
      payload: value,
    });
  };
};

export const swapCharactersArr = (charactersSortedArr) => {
  return function (dispatch) {
    dispatch({
      type: charactersActionTypes.SWAP_ARRAYS,
      payload: charactersSortedArr,
    });
  };
};

export const GetResultOfCharactersFetching = (page, limit) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: charactersActionTypes.FETCH_ALL_CHARACTERS,
        payload: page,
      });
      const characterArr = [];
      for (let i = page * limit - (limit - 1); i <= page * limit; i++) {
        const character = await axios.get(
          `https://rickandmortyapi.com/api/character/${i}`
        );
        characterArr.push(character.data);
      }
      dispatch({
        type: charactersActionTypes.FETCH_ALL_CHARACTERS_COMPLETED,
        payload: characterArr,
      });
    } catch (e) {
      dispatch({
        type: charactersActionTypes.FETCH_ALL_CHARACTERS_ERROR,
        payload: "Characters didn't loaded",
      });
    }
  };
};

export const fetchSingleCharacter = (id) => {
  return async function (dispatch) {
    try {
      const character = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const episodes = [];
      for (let i = 0; i < character.data.episode.length; i++) {
        const episode = await axios.get(character.data.episode[i]);
        episodes.push(episode.data);
      }
      dispatch({
        type: charactersActionTypes.FETCH_SINGLE_CHARACTER,
        payload: {
          character: character.data,
          episodes: episodes,
        },
      });
    } catch (e) {
      dispatch({
        type: charactersActionTypes.FETCH_ALL_CHARACTERS_ERROR,
        payload: "Characters didn't loaded",
      });
    }
  };
};
