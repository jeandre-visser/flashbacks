import { Grid, Grow, Typography, AppBar, Container } from '@material-ui/core';

const App = () => {
  return (
    <Container maxWidth="xl">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="left">Flashbacks</Typography>
      </AppBar> 
    </Container>
  )
}

export default App;