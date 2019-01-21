import { h, Component } from 'preact';
import style from './style';

import Section from './section';

// Different widgets
import LoginWidget from '../../components/Side widgets/login';

class Home extends Component {
	render (props, state) {
		return(
			<div class={style.home}>
				<h1 class={style.pageTitle}>Forside</h1>
				<div class={style.content}>
					<main class={style.main}>
						<Section title="Hvad er Lorem Ipsum?" tag="opslag" author={{id: "7819013694", name: "Sebastian Helt"}} date="08/12 2018">
							<p>
								Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer. Sætningen blev gjordt kendt i 1960'erne med lanceringen af Letraset-ark, som indeholdt afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus PageMaker, som også indeholdt en udgave af Lorem Ipsum.
							</p>
						</Section>

						<Section title="Det her er Lorem Ipsum" tag="opslag" author={{ id: "7819013694", name: "Sebastian Helt" }} date="07/12 2018">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nulla sem. Ut ac luctus lacus. Donec consectetur magna sit amet mollis aliquam. Praesent condimentum, ipsum quis bibendum bibendum, ante massa mollis odio, eget eleifend ex mauris vel nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sit amet nisi eget elit auctor dictum. Morbi interdum odio eget leo venenatis, ut faucibus tellus suscipit. Mauris molestie est vel lectus pellentesque ultricies. Suspendisse ullamcorper leo in metus malesuada, nec porttitor lacus egestas. Praesent et convallis orci. Morbi ultricies imperdiet vehicula. Nullam sed fringilla leo, a vehicula lorem. Vestibulum commodo, turpis pellentesque ullamcorper convallis, erat nibh varius nisl, in imperdiet dui nisi sagittis urna. Donec ornare aliquam fermentum.
							</p>
						</Section>
					</main>
					<aside class={style.sidebar}>
						<LoginWidget />
					</aside>
				</div>
			</div>
		);
	}
}

export default Home;