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
  const HomePage = () => <Home lan={state.strings} />;
  const AboutPage = () => <About lan={state.strings} />;
  const { strings } = state;
  return(
    <Router>
      {strings && (<div>
        <nav className="nav router">
          <Link to="/">{strings && strings.homePage}</Link>
          <Link to="/it">{strings && strings.aboutPage}</Link>
          <Idiom lan={strings} changeLan={setState} />
        </nav>
        <Route
          path="/"
          exact
          component={HomePage}
        />
        <Route
          path="/it"
          component={AboutPage}
        />
      </div>)}
    </Router>
  );
}