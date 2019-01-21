import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import Logo from '../../assets/icon-simple.png';
import MediaQuery from 'react-responsive';

// Slideshow images
import slideshowImage1 from '../../assets/images/landing slideshow/image.png';

// Details images
import detailImage1 from '../../assets/images/landing details/1.png';
import detailImage2 from '../../assets/images/landing details/2.png';

// Karate icons
import Icon1 from '../../assets/images/karate icons/karate.svg'
import Icon2 from '../../assets/images/karate icons/karate-2.svg'
import Icon3 from '../../assets/images/karate icons/martial-arts.svg'
import Icon4 from '../../assets/images/karate icons/kimono.svg'

// Icon pack
import ArrowDown from '../../assets/icon pack/arrow down.svg'

class Landing extends Component {
  scrollToDetails() {
    window.scrollTo({
      top: document.scrollingElement.scrollHeight,
      behavior: 'smooth'
    });
  }

  render() {
    return(
      <div class={style.landing} ref={el => this.el = el}>
        <div class={style.branding}>
          <img src={Logo} class={style.logo} />
          <h1 class={style.name}>Ølstykke Karate Academy</h1>
        </div>

        <div class={style['free-class']}>
          <h1>Prøv en gratis time!</h1>
          <p>
            Du kan få en gratis prøvetime hos ØKA.<br />
            Bare skriv din e-mail herunder, så vil vi kontakte dig!
          </p>
          <form>
            <input placeholder="Skriv din e-mail her" type="email" />
            <button type="button">Indsend</button>
          </form>
        </div>

        <div class={style.slideshow}>
          <img src={slideshowImage1} />
        </div>

        <div class={style['red-part']}>
          <div class={style['background-icons']}>
            <Icon1 />
            <Icon2 />
            <Icon3 />
            <Icon4 />
          </div>

          {/* Desktop and tablet */}
          <MediaQuery minWidth={601}>
            <div class={style['redirect-page']}>
              <Link href="/" class={style['goto-website']}>Gå til hjemmesiden</Link>
              <span>Gå til hjemmesiden eller<br />rul ned for flere detaljer</span>
              <a href="#details" onClick={this.scrollToDetails} class={style.arrow} style={`animation: 5s infinite alternate ${style.arrowBop}`}><ArrowDown /></a>
            </div>
          </MediaQuery>
          {/* Mobile without detail part */}
          <MediaQuery maxWidth={600}>
            <div class={style['redirect-page']}>
              <span>Gå til hjemmesiden for<br />at få flere detaljer</span>
              <Link href="/" class={style['goto-website']}>Gå til hjemmesiden</Link>
            </div>
          </MediaQuery>
          <div class={style['details-page']}>
            <div class={style['left-part']}>
              <p class={style['details-paragraph']}>
                <h1>Hvad er ØKA?</h1>
                ØKA’s hoved formål er at formidle traditionel Shotokan karate efter moderne principper til alle interesserede, uanset køn, alder eller erfaring med kampsport. I ØKA opfatter vi Shotokan Karate som kampkunst, selvforsvar, sport og indre fordybelse.
              </p>
              <p class={style['details-paragraph']}>
                ØKA er et aktivt medlem af Egedal Idrætsfællesskab, Shotokan karate International Federation Denmark og Dansk Karate Forbund.
              </p>
            </div>
            <div class={style['divider-dots']}></div>
            <div class={style['right-part']}>
              <div class={style['details-image']}>
                <div class={style['image-container']}><img src={detailImage1} /></div>
                <div class={style['review-container']}>
                  <p class={style.review}>"I Ølstykke Karate Acedemy er der et godt rigtigt godt fællesskab!"</p>
                  <span class={style.author}>Thomas</span>
                </div>
              </div>
              <div class={style['details-image']}>
                <div class={style['image-container']}><img src={detailImage2} /></div>
                <div class={style['review-container']}>
                  <p class={style.review}>"Ølstykke Karate Acedemy er helt klart den bedste klub jeg har været i!"</p>
                  <span class={style.author}>Lars</span>
                </div>
              </div>
            </div>
          </div>
          <Link href="/" class={style['website-link']}>Gå til hjemmesiden</Link>
        </div>
      </div>
    );
  }
}

export default Landing;
