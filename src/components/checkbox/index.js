import { h, Component } from 'preact';
import style from './style';

import Checkmark from '../../assets/icon pack/checkmark.svg';

class Checkbox extends Component {

  constructor(props) {
    super(props);

    this.state = { checked: props.checked };
  }

  handleChange = ({ target }) => {
    this.setState({ checked: target.checked });
  }

  render(props, { checked }) {
    return (
      <div class={style.checkbox}>
        <label for={props.name} class={checked ? style.checked : ''}>
          <Checkmark class={style.checkmark} />
        </label>
        <input type="checkbox" name={props.name} id={props.name} defaultChecked={props.checked} onClick={this.handleChange} />
      </div>
    );
  }
};

export default Checkbox;
