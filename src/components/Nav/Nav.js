import React from "react";

import {NavLink} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";

import "./Nav.scss";

const Nav = () => {
	const {changeTheme} = useActions();
	const theme = useSelector((state) => state.theme.theme);

	return (
		<nav className={theme === "light" ? "nav" : "nav dark-mode"}>
			<div className="nav__links">
				<NavLink
					className={theme === "light" ? "link" : "link link-dark-mode color-white"}
					activeClassName="active-link"
					to="/characters"
				>
					Characters
				</NavLink>
				<NavLink
					className={theme === "light" ? "link" : "link link-dark-mode color-white"}
					activeClassName="active-link"
					to="/addcharacter"
				>
					Add Character
				</NavLink>
			</div>
			<button
				className={
					theme === "light"
						? "nav__button"
						: "nav__button dark-mode color-white "
				}
				onClick={() => changeTheme(theme)}
			>
				Change theme
			</button>
		</nav>
	);
};

export default Nav;
