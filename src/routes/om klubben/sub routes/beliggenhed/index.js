import { Component, h } from "preact";
import style from "./style";


class Beliggenhed extends Component {
  render() {
    return (
      <div>
        <p>
          <strong>Træningsadresse:</strong><br />
          Toftehøjskolen, Frederiksborgvej 4 3650 Ølstykke
        </p>
        <p>
          <strong>Post adresse:</strong><br />
          Co. Jørgen Helt, Kirsebærvænget 8 3600 Frederikssund
        </p>
        <div class={style.mapContainer}>
          <iframe class={style.map} src="https://maps.google.com/maps?q=%C3%98lstykke%20karate%20academy&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>


      </div>
    );
  }
}

export default Beliggenhed;