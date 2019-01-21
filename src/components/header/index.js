import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import Logo from '../../assets/icon-simple.png';

class Header extends Component {
	render(props, state) {
		if (props.visible) {
			return(
					<header class={style.header}>
					<Link href="/">
						<img src={Logo} />
						<h1>Ølstykke Karate Academy</h1>
					</Link>
					<nav>
						<Link activeClassName={style.active} href="/">Forside</Link>
						<Link activeClassName={style.active} href="/profile/begivenheder">Begivenheder</Link>
						<Link activeClassName={style.active} href="/profile/galleri">Galleri</Link>
						<Link activeClassName={style.active} href="/omkarate">Om karate</Link>
						<Link activeClassName={style.active} href="/omklubben">Om klubben</Link>
						<Link activeClassName={style.active} href="/profile">Min side</Link>
					</nav>
				</header>
			);
		}

		return null;
	}
};

export default Header;
