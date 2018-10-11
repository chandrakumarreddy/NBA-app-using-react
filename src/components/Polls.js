import React from "react";

const URL = "http://localhost:3004/teams";

class Polls extends React.Component {
	state = {
		pollTeams: []
	};
	componentDidMount() {
		this.fetchTeams();
	}
	fetchTeams = () => {
		fetch(`${URL}?poll=true&_sort=count&_order=desc`, { method: "GET" })
			.then(res => res.json())
			.then(data => this.setState({ pollTeams: data }));
	};
	teamVote = (count, id) => {
		fetch(`${URL}/${id}`, {
			method: "PATCH",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ count: count + 1 })
		}).then(() => this.fetchTeams());
	};
	render() {
		const POSITIONS = ["1ST", "2ND", "3RD"];
		return (
			<div className="homePoll">
				<h4>Who will be the next champion</h4>
				<div className="pollContainer">
					{this.state.pollTeams.map((item, index) => (
						<div
							className="pollItem"
							key={item.id}
							onClick={() => this.teamVote(item.count, item.id)}
						>
							<img
								src={`/images/teams/${item.logo}`}
								alt={item.name}
								className="teamPollLogo"
							/>
							<div className="pollPosition">
								{POSITIONS[index]}
							</div>
							<div className="pollCount">{item.count} votes</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Polls;
