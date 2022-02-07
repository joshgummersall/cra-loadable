import "./App.css";
import logo from "./logo.svg";

import { Foo, Bar } from "./loadable";
import { Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link className="App-link" to="/foo">
          Foo
        </Link>
        <Link className="App-link" to="/bar">
          Bar
        </Link>
      </header>

      <Switch>
        <Route path="/foo" component={Foo} />
        <Route path="/bar" component={Bar} />
      </Switch>
    </div>
  );
}
