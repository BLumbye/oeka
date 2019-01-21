import { h, Component } from 'preact';
import { Link } from 'preact-router';
import { Match } from 'preact-router/match';
import style from './style';

// Different widgets
import LoginWidget from '../../components/Side widgets/login';
import Beliggenhed from './sub routes/beliggenhed';
import KlubbensHistorie from './sub routes/klubbens historie';

class OmKlubben extends Component {
	pages = [
		{ url: 'klubbenshistorie', name: 'Klubbens historie' },
		{ url: 'beliggenhed', name: 'Beliggenhed' },
		{ url: 'bestyrelse', name: 'Bestyrelse' },
		{ url: 'klubbensvedtægter', name: 'Klubbens vedtægter' },
		{ url: 'dojo-kunordensregler', name: 'Dojo-Kun ordensregler' },
		{ url: 'tidligereinstruktører', name: 'Tidligere instruktører' },
		{ url: 'dan-gradergennemtiden', name: 'Dan-grader gennem tiden' },
		{ url: 'æresmedlemmer', name: 'Æresmedlemmer' },
		{ url: 'priserogtider', name: 'Priser og tider' },
		{ url: 'økasprivatlivspolitik', name: 'ØKAs privatlivspolitik' },
	];

	render(props, state) {
		// if (this.page == null) {
		// 	return <div class={style.home}>
		// 		<h1 class={style.pageTitle}>404</h1>
		// 		<p>Oops, that page does not exist. Use the menu up top to get to another page.</p>
		// 	</div>
		// }

		return (
			<div class={style.home}>
				<h1 class={style.pageTitle}>Om klubben</h1>
				<div class={style.content}>
					<nav class={style.navigation}>
						<div>
							<h3>Underkapitler</h3>
							{this.pages.map(page => {
								return <Link activeClassName={style.active} href={'/omklubben/' + page.url}>{page.name}</Link>;
							})}
						</div>
					</nav>
					<main class={style.main}>
						<h2>Titel</h2>
						<Match path="/omklubben/" exact>
							{({ matches }) => matches && (
								<KlubbensHistorie />
							)}
						</Match>
						<Match path="/omklubben/klubbenshistorie">
							{({ matches }) => matches && (
								<KlubbensHistorie />
							)}
						</Match>
						<Match path="/omklubben/beliggenhed">
							{({ matches }) => matches && (
								<Beliggenhed />
							)}
						</Match>
						<p>
							Læs videre: <Link class={style.readMore} href={'/omklubben/' + this.pages[1].url}>{this.pages[1].name}</Link>
						</p>
					</main>
					<aside class={style.sidebar}>
						<LoginWidget />
					</aside>
				</div>
			</div>
		);
	}
}

export default OmKlubben;