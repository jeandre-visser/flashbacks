import React from 'react';
import { Grid, Grow, Container } from '@material-ui/core';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from '../../actions/posts'; 

const Home = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <Grow in>
    <Container>
      <Grid container justify="space-between" alignItems="stretch" spacing={6} className={classes.main} >
        <Grid item xs={12} sm={8} md={6} >
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} md={6} >
          <Posts setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  </Grow>
  )
}

export default Home