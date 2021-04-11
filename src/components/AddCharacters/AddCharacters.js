import React, {useEffect, useState} from "react";
import Input from "../cuustomComponents/Input";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import CustomButton from "../cuustomComponents/Button";
import CharactersList from "../CharactersList/CharactersList";

import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";
import {getThemeFromLocalStorage} from "../../untils";

import "./addCharacters.scss";

const AddCharacters = () => {
	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [imgValue, setImgValue] = useState("");
	const [genderValue, setПenderValue] = useState("");
	const [emptyFeldsInForm, setEmptyFeldsInForm] = useState(false);
	const {addCharacter, changeTheme} = useActions();
	const theme = useSelector((state) => state.theme.theme);

	useEffect(() => {
		changeTheme(getThemeFromLocalStorage());
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (nameValue && emailValue && imgValue && genderValue) {
			setEmptyFeldsInForm(false);
			const character = {
				name: nameValue,
				email: emailValue,
				img: imgValue,
				gender: genderValue,
			};
			addCharacter(character);
			setNameValue("");
			setEmailValue("");
			setImgValue("");
			setПenderValue("");
		} else {
			setEmptyFeldsInForm(true);
		}
	};

	return (
		<div
			className={
				theme === "light"
					? "add-characters-wrapper"
					: "add-characters-wrapper dark-mode"
			}
		>
			<form
				className={
					theme === "light"
						? "add-character-form"
						: "add-character-form add-character-form-dark-mode"
				}
				onSubmit={handleSubmit}
			>
				<div>
					<Input
						label="name"
						value={nameValue}
						onChange={(e) => setNameValue(e.target.value)}
					/>
					<Input
						label="email"
						value={emailValue}
						onChange={(e) => setEmailValue(e.target.value)}
					/>
					<Input
						label="image URL"
						value={imgValue}
						onChange={(e) => setImgValue(e.target.value)}
					/>
				</div>
				<FormControl component="fieldset">
					<FormLabel component="legend">Gender</FormLabel>
					<RadioGroup
						aria-label="gender"
						name="gender1"
						value={genderValue}
						onChange={(e) => setПenderValue(e.target.value)}
					>
						<FormControlLabel
							value="female"
							control={<Radio/>}
							label="Female"
						/>
						<FormControlLabel value="male" control={<Radio/>} label="Male"/>
						<FormControlLabel value="other" control={<Radio/>} label="Other"/>
					</RadioGroup>
				</FormControl>
				<p className={emptyFeldsInForm ? "error-msg" : "error-msg-hidden"}>
					All form fields must be filled out
				</p>
				<CustomButton type="submit">SAVE</CustomButton>
			</form>
			<CharactersList/>
		</div>
	);
};

export default AddCharacters;
