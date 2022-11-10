import React from 'react';
import { Avatar, Grid, Typography, Container, TextField, Button } from '@material-ui/core';
import useStyles from './styles';
import LockIcon from '@material-ui/icons/Lock';
import Field from './Field';

const Auth = () => {
  
  const classes = useStyles();

  const isRegister = false;

  const handleOnSubmit = () => {

  }

  const handleChange = () => {

  }

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.page}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography variant="h4">
          {isRegister ? 'Register' : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleOnSubmit} >
          <Grid xs={12} md={8} container>
           {isRegister && (
            <>
              <TextField 
                autoFocus 
                name="firstName" 
                label="First Name" 
                handleChange={handleChange} xs={6}
              />
            </>
           )}
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default Auth