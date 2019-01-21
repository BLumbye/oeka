import { h, Component } from 'preact';
import login from './login.sass';
import Checkbox from '../checkbox';

class LoginWidget extends Component {
  render() {
    return <div class={login.login}>
      <h2>Log ind</h2>
      <input placeholder="E-mail" type="email" />
      <input placeholder="Kodeord" type="password" />

      <div class={login.rememberPass}>
        <Checkbox name="remember" checked />
        <label for="remember" class={login.label}>Husk kodeord?</label>
      </div>

      <button type="button">Log ind</button>
      <div class={login.links}>
        <a href="#">Glemt kodeord?</a>
        <div class={login.line}></div>
        <a href="#">Opret bruger</a>
      </div>
    </div>;
  }
}

export default LoginWidget;