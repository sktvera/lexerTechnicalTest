import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import "./Assets/styles.css"

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
   <div className="bodyFooter">
        <footer >
          <Typography variant="h6" align="center" gutterBottom>
            Lexer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
           Challenge node.js postgres
          </Typography>
        </footer>
   </div>
  );
}

export default Footer;