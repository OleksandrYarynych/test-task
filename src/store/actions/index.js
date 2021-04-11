import * as charactersActions from "./charactersActions";
import * as addCharacters from "./AddCharacterActions";
import * as changeThemeAction from "./ChangeThemeAction";

export const allActions = {
  ...charactersActions,
  ...addCharacters,
  ...changeThemeAction,
};
