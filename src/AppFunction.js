import React, { useEffect, useState } from 'react';
import lan from './utils/lan.json';
import LocalizedStrings from 'localized-strings';
import './styles.css';

const AppFunction = () => {
  useEffect(() => {
    let strings = new LocalizedStrings(lan, {});
    let idiom = strings.getLanguage();
    setState({ 
      strings,
      options: {
        en: idiom === "en" ? true : false,
        it: idiom === "it" ? true : false,
      }
    });
  }, []);
  const [state, setState] = useState({ 
    strings: null, 
    options: { en: false, it: false }
  });
  const onChange = (event) => {
    const { strings } = state;
    if (event.target.value) {
      switch(event.target.value) {
        case "it":
          setState((prevState) => ({
            ...prevState,
            options: { en: false, it: true }
          }));
          strings.setLanguage("it");
          break;
        default:
          setState((prevState) => ({
            ...prevState,
            options: { en: true, it: false }
          }));
          strings.setLanguage("en");
          break;
        }
    }
  }
  const { strings, options } = state;
  return (
    <div>
      <h2>Select a lenguage</h2>
        <form>
          <div className="radioBtn">
            <input
              type="radio"
              value="en"
              onChange={(event) => onChange(event)}
              checked={options.en}
            />
            <label>English</label>
          </div>
          <div className="radioBtn">
            <input
              type="radio"
              value="it"
              onChange={(event) => onChange(event)}
              checked={options.it}
            />
            <label>Italian</label>
          </div>
        </form>
        {strings && (<p>- {strings.how} -</p>)}
        {strings && (<p>- {strings.boiledEgg} -</p>)}
        {strings && (<p>- {strings.softBoiledEgg} -</p>)}
        {strings && (<p>- {strings.choice} -</p>)}
        {strings && (<p>- {strings.fridge.egg} -</p>)}
        {strings && (<p>- {strings.fridge.milk} -</p>)}
    </div>
  );
}

export default AppFunction;