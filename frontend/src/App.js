import { Grid, Grow, Typography, AppBar, Container } from '@material-ui/core';
import './App.css';
import { images } from './constants/index.js';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" >
      <AppBar className={classes.appBar} position="static">
        <img src={images.navLogo} alt="logo" className={classes.image} />
      </AppBar> 
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;