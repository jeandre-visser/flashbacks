import React, { useState } from 'react';
import { Avatar, Grid, Typography, Container, TextField, Button } from '@material-ui/core';
import useStyles from './styles';
import LockIcon from '@material-ui/icons/Lock';
import Field from './Field';

const Auth = () => {
  
  const classes = useStyles();

  const isRegister = true;

  const handleOnSubmit = () => {

  }

  const handleOnChange = () => {

  }

  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => setShowPassword((prevPassword) => !prevPassword);

  return (
    <Container className={classes.main} maxWidth="sm">
      <div className={classes.page}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography variant="h4">
          {isRegister ? 'Register' : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleOnSubmit} >
          <Grid xs={12} md={10} container>
           {isRegister && (
            <>
              <Field 
                name="firstName" 
                label="First Name" 
                handleOnChange={handleOnChange} 
              />
              <Field 
                name="lastName" 
                label="Last Name" 
                handleOnChange={handleOnChange}
              />
            </>
           )}
           <Field name="email" label="Email" handleChange={handleOnChange} type="email" />
           <Field name="password" label="Password" handleChange={handleOnChange} type={showPassword ? 'text' : 'password'} handlePassword={handlePassword} />
           { isRegister && <Field name="confirmPassword" label="Confirm Password" handleOnChange={handleOnChange} type="password" />}
           <Button type="submit" fullWidth variant="contained" className={classes.submitBtn} >
              {isRegister ? "Register" : "Sign In"}
           </Button>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default Auth