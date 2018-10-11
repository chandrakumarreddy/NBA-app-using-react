import React from "react";

class Subscriptions extends React.Component {
	state = {
		email: "",
		error: false,
		success: false
	};

	handelChange = e => this.setState({ email: e.target.value });

	handleSubmit = e => {
		e.preventDefault();
		const regex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
		if (regex.test(this.state.email)) {
			this.saveEmailForSubscription(this.state.email);
		} else {
			this.setState({ error: true });
			this.clearMessages();
		}
	};

	saveEmailForSubscription = email => {
		fetch("  http://localhost:3004/subcriptions", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify({ email })
		}).then(() => {
			this.setState({ email: "", success: true });
			this.clearMessages();
		});
	};

	clearMessages = () => {
		setTimeout(
			function() {
				this.setState({ success: false, error: false });
			}.bind(this),
			3000
		);
	};
	render() {
		return (
			<div className="subscriptionPanel">
				<h4 className="subscribe">Subscribe here</h4>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="you@email.com"
						onChange={this.handelChange}
						value={this.state.email}
					/>
				</form>
				{this.state.error && (
					<div style={{ color: "red", margin: "5px 0" }}>
						Email validation failed
					</div>
				)}
				{this.state.success && (
					<div style={{ color: "green", margin: "5px 0" }}>
						Thank you
					</div>
				)}
				<small>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Suscipit magni labore esse porro sit excepturi sint ea
					architecto, vel, impedit optio iste, totam quibusdam
					aperiam! Magni ipsa quibusdam numquam dolores!
				</small>
			</div>
		);
	}
}

export default Subscriptions;
