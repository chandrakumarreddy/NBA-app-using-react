import React from "react";
import { Link } from "react-router-dom";

const URL = " http://localhost:3004/teams";

class Teams extends React.Component {
	state = {
		teams: [],
		featured: [],
		keyword: ""
	};

	componentDidMount() {
		fetch(URL, { method: "GET" })
			.then(res => res.json())
			.then(data => this.setState({ teams: data, featured: data }));
	}

	handleChange = e => {
		const keyword = e.target.value;
		if (keyword !== "") {
			const featured = this.state.featured.filter(
				item =>
					item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
			);
			this.setState({
				featured,
				keyword
			});
		} else {
			this.setState({ featured: this.state.teams, keyword });
		}
	};
	renderTeams = ({ featured }) => {
		return featured.map(item => {
			return (
				<Link
					to={`/teams/${item.name}`}
					key={item.id}
					className="teamItem"
				>
					<img src={`/images/teams/${item.logo}`} alt={item.name} />
				</Link>
			);
		});
	};
	render() {
		return (
			<div className="teamComponent">
				<div className="teamInput">
					<input
						type="text"
						onChange={this.handleChange}
						value={this.state.keyword}
						placeholder="Search for a team"
						spellCheck="false"
					/>
				</div>
				<hr />
				<div className="teamContainer">
					{this.renderTeams(this.state)}
				</div>
			</div>
		);
	}
}

export default Teams;
