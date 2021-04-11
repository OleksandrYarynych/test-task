import { changeThemeActionTypes } from "../actionTypes";

const initState = {
  default: "light",
  theme: "light",
};

export const ThemeReducer = (state = initState, action) => {
  switch (action.type) {
    case changeThemeActionTypes.CHANGE_THEME: {
      return { ...state, theme: action.payload };
    }
    default:
      return state;
  }
};
