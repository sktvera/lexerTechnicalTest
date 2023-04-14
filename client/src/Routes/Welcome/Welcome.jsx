import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import "./Assets/styles.css"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.black,
  },
}));

function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="containedWelcome">
          <Typography variant="h3" component="h1">
              welcome employees!
          </Typography>
          <NavLink className="navlinks" to="/homeLexer">
              <div  className="contained-buttonWelcome">
                  <Button   className="buttonWelcome"  variant="contained">START</Button>
              </div>
          </NavLink>
      </div>
    </div>
  );
}

export default Welcome;