import React from "react";
import Characters from "./components/Characters/Characters";
import AddCharacters from "./components/AddCharacters/AddCharacters";
import Nav from "./components/Nav/Nav";
import ChosenCharacter from "./components/ChosenCharacter/ChosenCharacter";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div>
      <Router>
        <Nav />
        <Route component={Characters} path="/characters" />
        <Route component={AddCharacters} path="/addcharacter" />
        <Route component={ChosenCharacter} path="/ChosenCharacter/:chosenId" />
        <Route path="/" exact render={() => <Redirect to="/characters" />} />
      </Router>
    </div>
  );
}

export default App;
