import React from "react";

import {useSelector} from "react-redux";

import "./CharactersList.scss";

const CharacterItem = (props) => {
	const {character} = props;
	const theme = useSelector((state) => state.theme.theme);

	return (
		<div
			className={
				theme === "light"
					? "character-wrapper"
					: "character-wrapper character-wrapper-dark-mode color-white"
			}
		>
			<img className="img" src={character.img} alt={`This is photo of ${character.name}`}/>
			<span className="character-wrapper__text">{character.name}</span>
			<span className="character-wrapper__text">{character.email}</span>
			<span className="character-wrapper__text">{character.gender}</span>
		</div>
	);
};

export default CharacterItem;
