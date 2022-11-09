import { Grid, Grow, AppBar, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from './actions/posts'; 

import './App.css';
import { images } from './constants/index.js';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Container maxWidth="xl" >
      <AppBar className={classes.appBar} position="static">
        <img src={images.navLogo} alt="logo" className={classes.image} />
      </AppBar> 
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={4} >
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;