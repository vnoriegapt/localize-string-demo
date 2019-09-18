import React from 'react';

export function About (props) {
  const { strings } = props;
  return(
    <div>
      {strings && (
        <div>
          <h3>{strings.pages.about.title}</h3>
          <p>{strings.pages.about.description}</p>
        </div>
      )}
    </div>
  );
}