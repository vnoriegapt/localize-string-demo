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
    const { lan, changeLan } = props;
    switch(idiomSelected) {
      case "it": lan.setLanguage("it"); break;
      default: lan.setLanguage("en"); break;
    }
    changeLan({ strings: lan });
    setAnchorEl(null);
  }
  const { lan } = props;
  return (
    <div className="idiomBtn">
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {lan ? lan.language : ''}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose("en")}>
          {lan ? lan.english : ''}
        </MenuItem>
        <MenuItem onClick={() => handleClose("it")}>
          {lan ? lan.italian : ''}
        </MenuItem>
      </Menu>
    </div>
  );
}