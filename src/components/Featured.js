import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

var settings = {
	arrows: false,
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

const Featured = ({ slides }) => {
	return (
		<Slider {...settings}>
			{slides.map(item => (
				<div key={item.id}>
					<div
						className="item-slider"
						style={{
							background: `url(/images/covers/${item.cover})`
						}}
					>
						<div className="caption">
							<h4>{item.topic}</h4>
							<p>{item.title}</p>
						</div>
					</div>
				</div>
			))}
		</Slider>
	);
};

Featured.defaultProps = {
	slides: []
};
Featured.propTypes = {
	slider: PropTypes.arrayOf(PropTypes.object)
};
export default Featured;
