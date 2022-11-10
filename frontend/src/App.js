import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => {

  return (
    <Container maxWidth="xl" >
      <Navbar />
      <Home />
    </Container>
  )
}

export default App;