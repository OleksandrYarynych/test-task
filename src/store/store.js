import thunk from "redux-thunk";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { charactersReducer } from "./reducers/charactersReducer";
import { AddCharacterReducer } from "./reducers/AddCharacterReducer";
import { ThemeReducer } from "./reducers/themeReducer";

const reducers = combineReducers({
  characters: charactersReducer,
  addCharacters: AddCharacterReducer,
  theme: ThemeReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
