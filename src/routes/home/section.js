import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './section-style';

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 * 
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * 
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
function getTextWidth(text, font) {
  // re-use canvas object for better performance
  var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  context.font = font;
  var metrics = context.measureText(text);
  return metrics.width;
}

class Section extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  } 

  state = {doubleLined: false};

  componentDidMount() {
    this.dividerRef.style.width = this.titleRef.offsetWidth + "px";
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize = () => {
    this.dividerRef.style.width = this.titleRef.offsetWidth + "px";
  }

  render(props, state) {
    return (
      <div class={style.section}>
        <div class={style.topContainer}>
          <h1 title={props.title} class={style.postTitle} ref={e => this.titleRef = e}>{props.title}</h1>
          {props.tag == "opslag" ?
            <div class={style.authorDate + ' ' + (state.doubleLined ? style.double : '')} ref={e => this.infoRef = e}>
              {/* <div class={style.infoWrapper} ref={e => this.infoWrapperRef = e}> */}
                <Link class={style.author} href={`/profile/${props.author.id}`}>{props.author.name}</Link>
                <span class={style.date}>{props.date}</span>
              {/* </div> */}
            </div>
          : ""}
        </div>
        <div class={style.divider} ref={e => this.dividerRef = e}>
          <span class={style.dividerTag}>{props.tag}</span>
          <div class={style.dividerLine}></div>
        </div>
        <div class={style.content}>
          {props.children}
        </div>
      </div>
    );
  }
}

export default Section;
