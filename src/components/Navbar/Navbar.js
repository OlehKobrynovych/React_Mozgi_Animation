import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from "react-router-dom";

import './Navbar.css';




function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        
        <MenuItem><NavLink to="/WherePage" className="button">WherePage</NavLink></MenuItem>
        <MenuItem><NavLink to="/" className="button">Home</NavLink></MenuItem>

      </Menu> */}

        <NavLink to="/Where" className="where-page__link where-page__link-left">Where?</NavLink>
        <NavLink to="/What" className="where-page__link where-page__link-right">What?</NavLink>
        <NavLink to="/Who" className="where-page__link where-page__link-bottom">Who?</NavLink>
    </div>
  );
}

export default Navbar;
