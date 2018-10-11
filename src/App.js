import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Teams from "./components/Teams";
import Team from "./components/Team";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Home} />
					<Route exact path="/teams" component={Teams} />
					<Route exact path="/teams/:id" component={Team} />
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
