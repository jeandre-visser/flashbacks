import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid
        container
        alignItems="stretch"
        spacing={2}
        className={classes.container}
      >
        {posts.map((post) => (
          <Grid item key={post._id} xs={12} sm={4} >
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts