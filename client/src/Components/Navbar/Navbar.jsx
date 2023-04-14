
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from "react-router-dom";

import Lexer from "./Assets/Img/Lexer.png"

import "./Assets/styles.css"


const Navbar =() =>{
  return (
    <AppBar position="static">
      <Toolbar className='bodyNavbar'>
        <Typography variant="h6">
        <div className='nav_logo'>
          <NavLink to="/">
            <img src={Lexer} alt="logo" className='logo' />
          </NavLink>
        </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
