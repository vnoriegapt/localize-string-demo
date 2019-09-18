import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import lan from './utils/lan.json';
import LocalizedStrings from 'localized-strings';
import './styles.css';
import { Home } from './Home';
import { About } from './About';
import { Idiom } from './Idiom';

export function AppRouter() {
  useEffect(() => {
    let strings = new LocalizedStrings(lan, {});
    setState({ strings });
  }, []);
  const [state, setState] = useState({ strings: null });
  const HomePage = () => <Home strings={state.strings} />;
  const AboutPage = () => <About strings={state.strings} />;
  const { strings } = state;
  return(
    <Router>
      {strings && (<div>
        <nav className="nav router">
          <Link to="/">{strings && strings.menu.home}</Link>
          <Link to="/about">{strings && strings.menu.about}</Link>
          <Idiom strings={strings} changeStrings={setState} />
        </nav>
        <Route
          path="/"
          exact
          component={HomePage}
        />
        <Route
          path="/about"
          component={AboutPage}
        />
        <div>
          <p>{strings && strings.pages.footer.cpy}</p>
        </div>
      </div>)}
    </Router>
  );
}