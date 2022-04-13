import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const MenuItem = (props) => {
  const useStyles = makeStyles((theme) => ({
    menuItem: {
      paddingRight: "1rem",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.menuItem}>
            <Typography variant="h6">Hoem</Typography>
          </Link>
          <Link to="/products" className={classes.menuItem}>
            <Typography variant="h6">Products</Typography>
          </Link>
          <Link to="/contactus" className={classes.menuItem}>
            <Typography variant="h6">Contact Us</Typography>
          </Link>
          <Link to="/login" className={classes.menuItem}>
            <Typography variant="h6">Login</Typography>
          </Link>
          <Link to="/notFound" className={classes.menuItem}>
            <Typography variant="h6">NotFound</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuItem;
