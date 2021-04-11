import React, {useEffect} from "react";
import SingleCharacter from "../SingleCharacter/SingleCharacter";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import {useActions} from "../../hooks/useActions";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getThemeFromLocalStorage} from "../../untils";

import "./Characters.scss";

const Characters = () => {
	const {
		GetResultOfCharactersFetching,
		setSelectValue,
		swapCharactersArr,
		changeTheme,
	} = useActions();

	useEffect(() => {
		GetResultOfCharactersFetching(1, 12);
		changeTheme(getThemeFromLocalStorage());
	}, []);

	const characters = useSelector((state) => state.characters.characters);
	const page = useSelector((state) => state.characters.page);
	const selectValue = useSelector((state) => state.characters.sortSelectValue);
	const theme = useSelector((state) => state.theme.theme);

	const sortArr = () => {
		const arr = [...characters];
		switch (selectValue) {
			case "status":
				arr.sort(function (c1, c2) {
					if (c1.status.toLowerCase() > c2.status.toLowerCase()) {
						return 1;
					}
					if (c1.status.toLowerCase() < c2.status.toLowerCase()) {
						return -1;
					}
					return 0;
				});
				break;
			case "species":
				arr.sort(function (c1, c2) {
					if (c1.species.toLowerCase() > c2.species.toLowerCase()) {
						return 1;
					}
					if (c1.species.toLowerCase() < c2.species.toLowerCase()) {
						return -1;
					}
					return 0;
				});
				break;
			case "gender":
				arr.sort(function (c1, c2) {
					if (c1.gender.toLowerCase() > c2.gender.toLowerCase()) {
						return 1;
					}
					if (c1.gender.toLowerCase() < c2.gender.toLowerCase()) {
						return -1;
					}
					return 0;
				});
				break;
		}
		swapCharactersArr(arr);
	};

	const handleChange = (e) => {
		setSelectValue(e.target.value);
	};

	return (
		<div
			className={
				theme === "light"
					? "characters-wrapper"
					: "characters-wrapper dark-mode"
			}
		>
			<div className="characters">
				<div
					className={theme === "light" ? "select" : "select select-dark-mode"}
				>
					<FormControl>
						<InputLabel id="demo-simple-select-label">Filter</InputLabel>
						<Select
							variant="outlined"
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							onChange={handleChange}
							value={selectValue}
						>
							<MenuItem value="status">status</MenuItem>
							<MenuItem value="species">species</MenuItem>
							<MenuItem value="gender">gender</MenuItem>
						</Select>
					</FormControl>
					<button className="btn" onClick={() => sortArr()}>
						SORT
					</button>
				</div>
				{characters.length ? (
					[...characters].map((c) => (
						<div className="full-width j-content-center m-bottom">
							<Link className="character-link" to={`/ChosenCharacter/:${c.id}`}>
								<SingleCharacter character={c} key={c.id}/>
							</Link>
						</div>
					))
				) : (
					<p>loading</p>
				)}
			</div>
			<div className="characters-nav">
				{page == 1 ? null : (
					<button
						className="arrow-btn"
						onClick={() => {
							const prevPage = page - 1;
							GetResultOfCharactersFetching(prevPage, 12);
						}}
					>
						<i className="fas fa-arrow-left"></i>
					</button>
				)}
				<span
					className={theme === "light" ? "page-text" : "page-text color-white"}
				>
          {page}
        </span>
				{page == 32 ? null : (
					<button
						className="arrow-btn"
						onClick={() => {
							const nextPage = page + 1;
							GetResultOfCharactersFetching(nextPage, 12);
						}}
					>
						<i className="fas fa-arrow-right "></i>
					</button>
				)}
			</div>
		</div>
	);
};

export default Characters;
