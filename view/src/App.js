import './App.css';
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homme from './components/page/Homme';
import Femme from './components/page/Femme';
import Search from './components/page/Search';
import React from 'react';

const App = () => {
  
  return (
    <Router className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Femme} />
        <Route exact path='/homme' component={Homme} />
        <Route exact path='/Search' component={Search} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
