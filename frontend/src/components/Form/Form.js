import React from 'react';
import useStyles from './styles';
import { Typography, Button, TextField } from '@material-ui/core';

const Form = () => {
  const classes = useStyles();
  const handleSubmit = () => {

  }
  
  return (
    <div className={classes.div}>
      <form noValidate autoComplete='off' onSubmit={handleSubmit} className={classes.form}>
        <Typography variant="h6">
          Flashback
        </Typography>
        <TextField 
          name="user" 
          variant="outlined" 
          label="Your Flashback" 
          fullWidth 
        />
      </form>
    </div>
  )
}

export default Form