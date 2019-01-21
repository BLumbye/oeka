import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

class Footer extends Component {
	render(props, state) {
		if (props.visible) {
			return (
				<footer class={style.footer}>
					<div class={style.col1}>
						<p>Frederiksborgvej 4, 3650 Ølstykke (<a target="_blank" href="https://www.google.dk/maps/place/Frederiksborgvej+4,+3650+%C3%98lstykke/">Kort</a>)</p>
						<p><a href="https://www.flaticon.com/packs/martial-arts-10" class={style.noColor}>Karate icons designed by Freepik from Flaticon</a></p>
					</div>
					<div class={style.col2}>
						<p><a href="#">Cookies på denne hjemmeside</a></p>
						<p>Ølstykke Karate Academy, Træningslokaler på Toftehøjskolen, Frederiksborgvej 4, 3650</p>
					</div>
					<div class={style.col3}>
						<p>+45 12 34 56 78 (<a href="#">Kontakt os</a>)</p>
						<p>&copy; Ølstykke Karate Academy {(new Date()).getFullYear()}</p>
					</div>
				</footer>
			);
		}

		return null;
	}
};

export default Footer;
