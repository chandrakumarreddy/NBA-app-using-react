import React from "react";
import Featured from "./Featured";
import Subscriptions from "./Subscriptions";
import Blocks from "./Blocks";
import Polls from "./Polls";

const URL = "http://localhost:3004/home";

class Home extends React.Component {
	state = {
		home: ""
	};
	componentDidMount() {
		fetch(URL, { method: "GET" })
			.then(res => res.json())
			.then(data => this.setState({ home: data }));
	}
	render() {
		return (
			<div>
				<Featured slides={this.state.home.slider} />
				<Subscriptions />
				<Blocks blocks={this.state.home.blocks} />
				<Polls />
			</div>
		);
	}
}

export default Home;
