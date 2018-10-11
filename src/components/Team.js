import React from "react";

const URL = "http://localhost:3004/teams";

class Team extends React.Component {
	state = {
		data: []
	};
	componentDidMount() {
		fetch(`${URL}?name=${this.props.match.params.id}`, { method: "GET" })
			.then(res => res.json())
			.then(data => this.setState({ data }));
	}
	renderItems = ({ data }) => {
		return data.map(item => (
			<div className="teamDataWrapper" key={item.name}>
				<div className="left">
					<img src={`/images/teams/${item.logo}`} alt={item.name} />
				</div>
				<div className="right">
					<h1>{item.name}</h1>
					<p>{item.description}</p>
					<hr />
					<div className="squad">{this.renderSquad(item.squad)}</div>
				</div>
			</div>
		));
	};
	renderSquad = squad => {
		return squad.map(item => (
			<div key={item.name} className="item player-wrapper">
				<img alt={item.name} src={`/images/avatar.png`} />
				<h4>{item.name}</h4>
				<div className="node">
					<span>Number:</span>
					{item.number}
				</div>
				<div className="node">
					<span>PPG:</span>
					{item.PPG}
				</div>
				<div className="node">
					<span>APG:</span>
					{item.APG}
				</div>
				<div className="node">
					<span>RPG:</span>
					{item.RPG}
				</div>
			</div>
		));
	};
	render() {
		return <div className="teamData">{this.renderItems(this.state)}</div>;
	}
}

export default Team;
