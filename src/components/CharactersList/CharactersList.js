import React from "react";
import CharacterItem from "./CharacterItem";

import {useSelector} from "react-redux";

import "./CharactersList.scss";

const CharactersList = () => {
	const characters = useSelector((state) => state.addCharacters);

	return (
		<div className="character-item-wrapper">
			{characters.length > 0 ? (
				characters.map((c, i) => <CharacterItem character={c} key={i}/>)
			) : (
				<p>You didn't add some characters</p>
			)}
		</div>
	);
};

export default CharactersList;
