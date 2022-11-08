import React, { useState } from 'react';
import useStyles from './styles';
import { Typography, Button, TextField } from '@material-ui/core';

const Form = () => {
  const classes = useStyles();
  const handleSubmit = () => {

  }

  const [ postData, setPostData ] = useState({
    user: '', title: '', message: '', tags: '', selectedFile: ''
  });
  
  return (
    <div className={classes.div}>
      <form noValidate autoComplete='off' onSubmit={handleSubmit} className={classes.form}>
        <Typography variant="h6" className={classes.p}>
          Flashback
        </Typography>
        <TextField 
          name="user" 
          variant="outlined" 
          label="Your Flashback" 
          fullWidth
          value={postData.user}
          onChange={} 
        />
      </form>
    </div>
  )
}

export default Form