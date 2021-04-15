import React, { useEffect } from "react";

import { getThemeFromLocalStorage } from "../../untils";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

import "./ChosenCharacter.scss";

const ChosenCharacter = () => {
  const { chosenId } = useParams();
  const { fetchSingleCharacter, changeTheme } = useActions();

  useEffect(() => {
    const id = chosenId.slice(1);
    fetchSingleCharacter(id);
    changeTheme(getThemeFromLocalStorage());
  }, []);

  const chosenCharacter = useSelector(
    (state) => state.characters.singleCharacter
  );
  const episodes = useSelector(
    (state) => state.characters.episodesForSingleCharacter
  );
  const theme = useSelector((state) => state.theme.theme);

  if (!chosenCharacter) return <p>character didn't loaded</p>;

  return (
    <div
      className={
        theme === "light"
          ? "single-character-page-wrapper"
          : "single-character-page-wrapper dark-mode color-white"
      }
    >
      <div
        className={
          theme === "light"
            ? "single-character-wrapper"
            : "single-character-wrapper single-character-wrapper-dark-mode"
        }
      >
        <div className="single-character-header">
          <img
            className="single-character-img"
            src={chosenCharacter.image}
            alt={`Here is a photo of ${chosenCharacter.name}`}
          />
          <span className="single-character-name">{chosenCharacter.name}</span>
        </div>
        <div className="single-character-info">
          <p className="single-character-text">
            status - {chosenCharacter.status}
          </p>
          <p className="single-character-text">
            species - {chosenCharacter.species}
          </p>
          <p className="single-character-text m-bottom30px">
            gender - {chosenCharacter.gender}
          </p>
          <p className="single-character-text">episodes</p>
          {episodes.map((e, i) =>
            i !== episodes.length - 1 ? (
              <span className="single-character-text">{e.name}, </span>
            ) : (
              <span className="single-character-text">{e.name}</span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ChosenCharacter;
