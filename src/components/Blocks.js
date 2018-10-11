import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const Blocks = ({ blocks }) => {
	return (
		<div className="homeBlock">
			{blocks.map(item => (
				<Zoom key={item.id}>
					<div className={`item ${item.type}`}>
						<div className="veil" />
						<div
							className="image"
							style={{
								background: `url(/images/blocks/${
									item.image
								}) no-repeat`
							}}
						/>
						<div className="title">
							<Link to={item.link}>{item.title}</Link>
						</div>
					</div>
				</Zoom>
			))}
		</div>
	);
};

Blocks.defaultProps = {
	blocks: []
};
Blocks.propTypes = {
	blocks: PropTypes.arrayOf(PropTypes.object)
};
export default Blocks;
