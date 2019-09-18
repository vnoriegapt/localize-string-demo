import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export function Idiom(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose(idiomSelected) {
    const { strings, changeStrings } = props;
    switch(idiomSelected) {
      case "es": strings.setLanguage("es"); break;
      default: strings.setLanguage("en"); break;
    }
    changeStrings({ strings });
    setAnchorEl(null);
  }
  const { strings } = props;
  return (
    <div className="idiomBtn">
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {strings ? strings.menu.idiom : ''}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose("en")}>
          {strings ? strings.menu.en : ''}
        </MenuItem>
        <MenuItem onClick={() => handleClose("es")}>
          {strings ? strings.menu.es : ''}
        </MenuItem>
      </Menu>
    </div>
  );
}