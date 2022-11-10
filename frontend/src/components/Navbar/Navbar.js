import React from 'react';
import { AppBar, Avatar, Link, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import { images } from '../../constants';

const Navbar = () => {
  const classes = useStyles();
  const user = null;

  return (
    <AppBar className={classes.appBar} position="static">
      <div className={classes.navContainer}>
        <Link href="/">
          <img src={images.navLogo} alt="logo" className={classes.image} />
        </Link>
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
          <Link href="/auth" underline="none">
            <Button variant="contained" className={classes.signOut}>Sign In</Button>
          </Link>
         )}
      </Toolbar>
    </AppBar> 
  )
}

export default Navbar;