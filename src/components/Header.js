import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div className="flexbox-container">
				<div className="logo">
					<Link to="/">
						<span />
					</Link>
				</div>
				<nav>
					<Link to="/teams">Teams</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
