import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import { images } from '../../constants';

const Navbar = () => {
  const classes = useStyles();
  const user = null;

  return (
    <AppBar className={classes.appBar} position="static">
      <div className={classes.navContainer}>
        <img component={Link} to="/" src={images.navLogo} alt="logo" className={classes.image} />
      </div>
      <Toolbar classnName={classes.tool} >
        {user ? (
          <div className={classes.userProfile}>
            <Avatar className={classes.yellow} alt={user.result.name} src={user.result.imgUrl}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.username} variant="h6" >{user.result.name}</Typography>
            <Button className={classes.logout} variant="contained">Sign out</Button>
          </div>  
         ) : (
          <Button component={Link} to="/auth" variant="contained" className={classes.signOut}>Sign In</Button>
         )}
      </Toolbar>
    </AppBar> 
  )
}

export default Navbar;