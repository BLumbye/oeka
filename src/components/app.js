import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Header from './header';
import Footer from './footer';
import Helmet from 'preact-helmet';

// Code-splitting is automated for routes
import Landing from '../routes/landing';
import Home from '../routes/home';
import Profile from '../routes/profile';
import OmKlubben from '../routes/om klubben';
import OmKarate from '../routes/om karate';

export default class App extends Component {
	constructor() {
		super();
		this.state.currentUrl = "";
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({ currentUrl: e.url });
	};

	render(props, {currentUrl}) {
		return (
			<div id="app">
				<Helmet 
					htmlAttributes={{lang: "da", amp: undefined}}
					title="Ølstykke Karate Academy"
				/>

				<Header visible={!currentUrl.includes('/landing')} />
				<Router onChange={this.handleRoute}>
					<Landing path="/landing/" />
					<Home path="/" />
					<OmKarate path="/omkarate/" />
					<OmKlubben path="/omklubben/" page="klubbenshistorie" />
					<OmKlubben path="/omklubben/:page" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
				<Footer visible={!currentUrl.includes('/landing')} />
			</div>
		);
	}
}
