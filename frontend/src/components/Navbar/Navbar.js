import React from 'react';
import { AppBar } from '@material-ui/core';
import useStyles from './styles';
import { images } from '../../constants';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
    <img src={images.navLogo} alt="logo" className={classes.image} />
      </AppBar> 
  )
}

export default Navbar;