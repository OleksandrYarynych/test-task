import { changeThemeActionTypes } from "../actionTypes";
import { pushDataToLocalStorage } from "../../untils";

export const changeTheme = (currentTheme) => {
  return function (dispatch) {
    if (currentTheme === "light") {
      pushDataToLocalStorage("theme", "dark");
      dispatch({
        type: changeThemeActionTypes.CHANGE_THEME,
        payload: "dark",
      });
    } else if (currentTheme === "dark") {
      pushDataToLocalStorage("theme", "light");
      dispatch({
        type: changeThemeActionTypes.CHANGE_THEME,
        payload: "light",
      });
    }
  };
};
