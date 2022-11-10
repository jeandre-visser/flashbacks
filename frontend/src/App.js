import { Grid, Grow, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from './actions/posts'; 
import Navbar from './components/Navbar/Navbar';

import './App.css';
// import { images } from './constants/index.js';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <Container maxWidth="xl" >
      <Navbar />
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
    </Container>
  )
}

export default App;