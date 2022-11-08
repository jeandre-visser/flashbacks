import React, { useState } from 'react';
import useStyles from './styles';
import { Typography, Button, TextField } from '@material-ui/core';
import { MdPhotoCamera } from 'react-icons/md';

const Form = () => {
  const classes = useStyles();
  const handleSubmit = () => {

  }

  const clear = () => {

  }

  const [ postData, setPostData ] = useState({
    user: '', title: '', message: '', tags: '', selectedFile: ''
  });
  
  return (
    <div className={classes.div}>
      <form noValidate autoComplete='off' onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
        <Typography variant="h6" className={classes.p}>
          Flashback
        </Typography>
        <TextField 
          name="User" 
          variant="outlined" 
          label="User" 
          fullWidth
          value={postData.user}
          onChange={(event) => setPostData({ ...postData, user: event.target.value })}
        />
        <TextField 
          name="title" 
          variant="outlined" 
          label="Title" 
          fullWidth
          value={postData.title}
          onChange={(event) => setPostData({ ...postData, title: event.target.value })}
        />
        <TextField 
          name="message" 
          variant="outlined" 
          label="Your Flashback" 
          fullWidth
          value={postData.message}
          onChange={(event) => setPostData({ ...postData, message: event.target.value })}
        />
        <TextField 
          name="tags" 
          variant="outlined" 
          label="tags" 
          fullWidth
          value={postData.tags}
          onChange={(event) => setPostData({ ...postData, tags: event.target.value })}
        />
        <div className={classes.fileInput}>
          <Button variant="contained" component="label" disableElevation className={classes.photo}>
            Upload <MdPhotoCamera size={20} style={{marginLeft: '5px'}} />
          <input hidden accept="image/*" 
            multiple={false}
            type="file"
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
          </Button>
        </div>
        <Button 
          className={classes.btn} 
          fullWidth
          variant="contained"
          size="large"
          type="submit"
        >Post
        </Button>
      </form>
    </div>
  )
}

export default Form