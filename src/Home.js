import React from 'react';

export function Home (props) {
  const { strings } = props;
  return(
    <div>
      {strings && 
        strings.pages.home.listOfPoems.map(poem => (
          <div key={poem.title}>
            <h3>{poem.title}</h3>
            <p>{poem.paragraph}</p>
          </div>
        ))}
    </div>
  );
}