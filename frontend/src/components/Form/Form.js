import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Typography, Button, TextField } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { MdPhotoCamera } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux';

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    user: '', title: '', message: '', tags: '', selectedFile: ''
  });

  const post = useSelector((state) => currentId ? state.posts.find((pos) => pos._id === currentId) : '');

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData));
    }
    erase();
  }

  const erase = () => {
    setCurrentId(null);
    setPostData({
      user: '', title: '', message: '', tags: '', selectedFile: ''
    });
  }
  
  
  return (
    <div className={classes.div}>
      <form noValidate autoComplete='off' onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
        <Typography variant="h6" className={classes.p}>
          {currentId ? 'Edit' : 'Post'} Your Flashback
        </Typography>
        <TextField 
          name="user" 
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
        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
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