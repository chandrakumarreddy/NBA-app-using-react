import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className="flexbox-container">
				<div className="logo">
					<Link to="/">
						<span />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
