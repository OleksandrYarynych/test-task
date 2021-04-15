import React from "react";

import {useSelector} from "react-redux";

import "./SingleCharacter.scss";

const SingleCharacter = ({character}) => {
	const {image, status, name} = character;
	const theme = useSelector((state) => state.theme.theme);

	return (
		<div
			className={
				theme === "light"
					? "character-wrapper"
					: "character-wrapper character-wrapper-dark-mode color-white"
			}
		>
			<img className="img" src={image} alt={`This is gerowhich names ${name}`}/>
			<span className="character-wrapper__text">{status}</span>
			<span className="character-wrapper__text">{name}</span>
			<div>
				<p>{character.species}</p>
				<p>{character.gender}</p>
			</div>
		</div>
	);
};

export default SingleCharacter;
