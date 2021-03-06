import { h, Component } from 'preact';
import style from './style';

// Different widgets
import LoginWidget from '../../components/Side widgets/login';

class OmKarate extends Component {
	render(props, state) {
		return (
			<div class={style.home}>
				<h1 class={style.pageTitle}>Om karate</h1>
				<div class={style.content}>
					<main class={style.main}>
						<h2>Karatens historie</h2>
						<p>
							Inden for karate er der det samme problem som også findes inden for alle andre former for kampkunst: Nemlig at der ikke findes noget nedskrevet om hvordan karate opstod og i en lang periode efter findes der kun begrænset skriftligt materiale om karatens udvikling.Derimod findes der masse skrfitligt materiale op gennem 1900 tallet om karatens historie, som er baseret på fortællinger og meninger, hvilket naturligvis gør at karatens historie kan variere alt efter hvem der har skrevet den.
						</p>
						<p>
							Derudover har mange omskrevet de fakta som rent faktisk har været tilstede for bevidst eller ubevidst at fremhæve sig selv. Derfor skal selv denne tekst læses med kritiske øjne selv om teksten i størst mulig grad er baseret på historiske fakta, forskning og konklusioner herfra.
						</p>
						<hr />
						<h5>Baggrund</h5>
						<p>
							Blandt dyr og mennesker har der altid fundet kampe sted, enten på grund af behov for føde, territorium eller partner. Når det gælder mennesker er metoderne i kamp ændret i takt med at menneskets intelligens er stedet og herunder opnået større viden inden for taktik med og uden våben.
						</p>
						<p>
							Dette har afstedkommet en konstant udvikling inden for angreb og forsvar. Hvis man går tilbage i tiden til civilisationens begyndelse og ser på forskellige kulturer så findes der ikke meget nedskrevet om civilt selvforsvar. Det har ofte været befolkningen der har ført traditionerne videre så behovet for at skrive tingene ned har ikke været til stede. Derfor er det meget vanskeligt at vide noget præcist om selv forsvarssytemers udvikling, da der kun findes spredte nedskrivninger fra forskellige kilder.
						</p>
						<p>
							Forskellige kulturer har gennem tiden udviklet forskellige måder at kæmpe på alt efter behovet deraf. Kampformerne er blevet spredt via rejsende så her igennem har der fundet en udveksling/inspiration sted. Kampformerne har gennem tiden forandret sig og flere er i fredelige tider blevet til en kunstart meget langt fra dets oprindelige brutale formål.
						</p>
						<p>
							Dog findes der en masse nedskrevet om krigsførelse gennem tiden, hvilket skyldes behovet for herskere, som skulle dokumentere krige, krigstaktikker og uddannelse af tropper.
						</p>
						<hr />
						<h5>Karatens historie</h5>
						<p>
							Den kampform vi i dag kalder karate er udviklet på øen Okinawa som ligger syd for Japan. Okinawa har gennem historien været okkuperet og været en provins tilhørende skiftevis Japan og Kina. Okinawa er den største ø i en øgruppe kaldet Ryukyu øerne.
						</p>
						<p>
							Karate har gennem tiden været under stor indflydelse af kampformer fra blandt andet Kina, Thailand, Japan og Okinawa. Inspirationen fra de forskellige kampformer er dog sket i forskellige tidsperioder og har i sidste ende formet det vi i dag kender som karate. En af de vigtigste inspirationskilder har været Okinawas egen kampform, Tegumi, som er en kampform baseret på brydning, balancebrydning og kast. Denne kampform eksisterer dog i dag ikke i sin oprindelige form, mange mener dog at Okinawan Sumo som i særdeleshed blev udøvet i 1800-1900 tallet havde sit udspring fra Tegumi.
						</p>
						<p>
							Sumo brydning på Okinawa er meget forskellig fra den sumo brydning vi ser i Japan i dag, faktisk er det kun navnet der er fælles. Den første indflydelse udefra Okinawa er fra Japan. Da Minamoto Tametomo blev forvist fra Japan med sine tropper, efter et nederlag mod Taira i 1156, til Oshima. Han erobrede efterhånden Oshima og Izu og fortsatte sydpå til han nåede Ryukyu øerne, hvor han efter et stykke tid blev herre over Urazoe. Der fik han en søn, Shunten, som blev den første konge efter Tenson dynastiet.
						</p>
						<p>
							I 1372 sendte den kinesiske kejser er repræsentant til Ryukyu øerne for at opnå en alliance. Dette var starten gradueret på de første kinesiske bosættelser som fandt sted på Okinawa i 1393. Det drejede sig om 36 familier. Disse familier bosatte sig i byen Kume, som er en del af byen Naha, og blev kaldt vinduet mod den kinesiske kultur. Mange anser Chuan-fa (også kaldet gong-fu) at være en del af de kundskaber de medbragte.
						</p>
						<p>
							De første nedskrivninger om karate findes hos forfatteren og filosoffen Teijunsoku Uekta (1663-1734) som skrev ” Det spiller ingen rolle hvordan du behersker Te (karate) eller dine studier, der vigtigste er hvordan du opfører dig og din medmenneskelighed i dagligdagen”.
						</p>
						<p>
							I 1762 blæste et skib fra Okinawa til Satsuma ud af kurs og strandede på Oshimas strand. Her blev Tobe Ryoen udset til at nedskrive vidnesberetninger fra besætningen og passagerene. Under denne diskussion nævnte kaptajnen Shiohira Pechin, en kineser ved navn Kusankun. Shiohira beskrev hvordan Kusankun forsvarede sig imod større modstandere ved at anvende sig af kumiaijutsu og fælde modstanderen ved at sakse deres ben (hasami waza).
						</p>
						<p>
							Man ved ikke om Kusankun var en persons navn eller om det var en titel som indehaves af et kinesisk sendebud. En mundtlig tradition på Okinawa siger at Kusankun skulle være lærer til blanvt andet Sakugawa Pechin, som anses for at have haft stor indflydelse på karatens udvikling. Beretningen om det strandede skib er kendt som Oshima Hikki eller Oshima beretningen.
						</p>
						<p>
							Sakugawa som blev født i slutningen af 1700 tallet var en af de første navngivne personer fra Okinawa som trænede i Kina, men der er stor sandsynlighed for at han ikke var den første. Man ved at der efterfølgende er rejst et stort antal personer til Kina for at delvist eller helt at fordybe sig i Chuan-fa.
						</p>
						<p>
							Alt som blev lært i Kina blev blandet med de kampformer der i forvejen blev trænet på Okinawa. Mange udøvere i dag siger, at deres stilartsmester var den kinesiske mesters bedste elev, som senere arvede den kinesiske mesters stilart. Dette kan dog ikke tages seriøst af flere årsager. Racismen mod Okinawanerne var stor i Kina og de rejsende som kom fra Okinawa fik formentlig ikke lært sig tilstrækkeligt, idet lærerene vidste at de efter kort tid skulle rejse tilbage til Okinawa. Så efter nogle år har de formentlig kun fået lært grundøvelserne og måttet nøjes med dette. Lærerne var mere interesseret i at lære en eller to personer op på holdet for at føre traditionen videre, hvilket gik ud over de andre på holdet.
						</p>
						<p>
							Ingen som kom tilbage fra Kina forebeholdt sig retten til at kalde deres system f.eks White Crane, Tiger boxing eller lignende, hvilket ville have været naturligt hvis de havde fået den ære at arve en stil. Dette tyder på, der ikke var tale om topudøvere selv om de sikkert har været seriøse.
						</p>
						<p>
							Man har på Okinawa heller ikke fundet nogen stil som helt ligner nogen kendt stil fra Kina, hvorfor de må være blandet sammen med Tegumi eller andre stilarter.
						</p>
						<p>
							Frem til slutnigen af 1800-tallet blev karate trænet af et fåtal af personer som ofte besad en høj position i samfundet. At karate skulle have været trænet af bønder er ikke sandt eller særlig sandsynligt. Alle karate mestre man i dag kender til havde en højtstående position i samfundet. Ofte af Pechin klassen hvilket svarer til den Japanske Samurai.
						</p>
						<p>
							I 1867 blev der afholdt en festival i Shuri´s Ochayagoten for at fejre Zhao Xin, som var den sidste ambassadør der besøgte Okinawa imens det stadig tilhørte Kina. Under denne festival blev der for første gang lavet en officiel opvisning af karate på Okinawa, sammen med opvisnigner af andre ubevæbnede og stilarter med våben.
						</p>
						<p>
							Set ud fra et karate historisk perspektiv er en af de interessante dele demonstrationerne af kata. Blandt andet blev en kata ved navn Suparinpei vist ved denne lejlighed. Opvisningen fandt sted før Higashionna Kanryo rejste til Kina og i følge karatestilarten Goju-ryu´s officielle historie introducerede han Suparinpei og andre kata til Okinawa.
						</p>
						<p>
							I slutningen af 1899 tallet begyndte Itosu Ankoh og en gruppe mennesket en kampagne for at popularisere Okinawa hos Japanerne som på det tidspunkt styrede Okinawa. Itosu Senseis værktøj var en af de få ting som var unikke for Okinawa: Karate.
						</p>
						<p>
							Japan var i gang med at opruste til krig og Itosu så en lejlighed til at lade Okinawa gøre en indsats for at få goodwill i Japanernes øjne. Hvis Okinawa kunne stille med stærke, udholdende soldater til Japans armé, så kunne Okinawas rygte blive forbedret. For at dette skulle kunne lykkedes skulle karate indføres i skolerne på Okinawa. Itosu forandrede kata ved at tage alle de farlige teknikker ud af kataerne for at gøre det mere tåleligt for forældre og skolerne. Det vigtigste var ikke at lære eleverne karate efter de gamle principper men i stedet anvende dele af karate som et middel for at træne eleverne i disciplin og fysisk aktivitet. Alt dette med henblik på at kunne lægge fundamentet til en stærk hær og gøre reklame for Okinawa.
						</p>
						<p>
							Problemet var at strukturen i træningen ikke fulgte med og det krævede lang tid at træne soldater op med de metoder og det Japanske krigsminesterium ville ikke acceptere karate som en træningsmetode for sine soldater. Nogle af studenterne på Okinawa som havde lært karate i skolen begyndte efter studierne at undervise i karate. Efterhånden blev det til mange og fordi de var flere end de oprindelige karatemestre, som kun havde lært karate efter den gamle måde, blev gennemslagskraften for “den nye karate” langt større end blandt de gamle mestres.
						</p>
						<p>
							Denne karate blev spredt til JApan i 1917, hvor den for første gang blev officiclet demonstreret i Japan af Matayoshi Shinko og Funakoshi Gichin.
						</p>
						<p>
							Nogen af de mest kendte udøvere som tog karate til Japan var Funakoshi Gichin, Mabuni Kenwa og Miyagi Chojun og deres elever er årsagen til de størtste stilarter som trænes i dag (Shotokan, Shito-ryu og Goju-ryu).
						</p>
						<p>
							Et af knudepunkterne for at kunne udbrede karate i Japan var universiteterne, hvor instruktørerne arbejdede hårdt for at få karate godkendt som en fysisk aktivitet.
						</p>
						<p>
							Mange andre Okinawanere udbredte også karate i Japan men deres navn er ikke lige så kendt, selvom de havde stor viden. Frem til 1936 var karate mest kendt under navnet Te, Di, Tuide eller lignende stavemåder, undtagen var en tekst skrevet af Hanashiro Chomo i 1905 hvor for første gang anvender ideogrammtet der læses som Karate.
						</p>
						<p>
							I 1936 blev der afholdt et møde på Okinawa med de mest kendte og indflydelsesrige mestrer i et forsøg på at strukturere karate således at det kunne spredes rundt omkring i verden.
						</p>
						<p>
							De tilstedeværende var Hanshiro Chomo, Kyan Chotoku, Motobu Choki, Chibana Chosin, Kiyoda Juhatsu, Miyagi Chojun, Gusukuma Shimpan samt Nahasone Genwa og et antal personer som repræsenterede medier og regeringen på Okinawa. En af de vigtigste beslutninger under mødet var at kalde formen Karate-do. I Japan havde Nippon Butokukai allerede i 1933 slået fast at formen skulle hedde Karate-do.
						</p>
						<p>
							Den største årsag til sprednigen af karate rundt omkring i verden var de amerikanske baser som voksede op på Okinawa efter 2. verdenskrig, hovr amerikanske soldater fik træning i blandt andet karate, ju-jutsu og judo som en del af deres uddannelse. En del soldater trænede også i deres fritid i de forskellige dojoer på Okinawa.
						</p>
						<p>
							Da de rejste hjem til USA forsatte en del med at træne og nogen begyndte at undervise. En af de tidligste pionerer var Robert Trias som gjorde et stort stykke arbejde for at popularisere karaten i USA. Karate spredtes senere til resten af verden og kan i dag findes i de fleste lande.
						</p>
						<p>
							Ovennævnte indblik i karatens historie er på ingen måde fuldstændig men giver et indblik i hvor kompliceret historien er.
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

export default OmKarate;