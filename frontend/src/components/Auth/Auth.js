import React, { useState } from 'react';
import { Avatar, Grid, Typography, Container, Button } from '@material-ui/core';
import useStyles from './styles';
import LockIcon from '@material-ui/icons/Lock';
import Field from './Field';
import { GoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';

const Auth = () => {
  
  const classes = useStyles();

  const [isRegister, setIsRegister] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => setShowPassword((prevPassword) => !prevPassword);

  const handleOnSubmit = () => {

  }

  const handleOnChange = () => {

  }


  const switchLog = () => {
    setIsRegister((prevIsRegister) => !prevIsRegister);
    handlePassword(false);
  }

  const googleSuccess = (res) => {
    console.log(res);
  }

  const googleFail = () => {
    console.log("Google login unsuccessful")
  }

  return (
    <Container maxWidth="sm" component="main">
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
          

            <Button type="submit" fullWidth disableElevation variant="contained" className={classes.submitBtn} >
              {isRegister ? "Register" : "Sign In"}
            </Button>

            <GoogleLogin 
              clientId="google id"
              render={(renderProps) => (
                <Button 
                  className={classes.google} 
                  variant="contained" 
                  fullWidth 
                  disableElevation
                  onClick={renderProps.onClick} 
                  disabled={renderProps.disabled} 
                  startIcon={<FcGoogle size={25} />}
                >
                  Sign In With Google
                </Button>
              )}
              cookiePolicy='single_host_origin'
              onFailure={googleFail}
              OnSucces={googleSuccess}
            />

            <Grid container justify="center">
              <Grid item >
                <Button onClick={switchLog} justify='center' >
                  {isRegister ? "Already a user? Sign In" : "Not a user? Register now"}
                </Button>
              </Grid>
            </Grid>
         </Grid>
        </form>
      </div>
    </Container>
  )
}

export default Auth