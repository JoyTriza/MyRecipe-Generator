import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import Randommeal from './components/RandomMeal/Randommeal';
import Homepage from './components/HomePage/Homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/random" component={Randommeal} />
      </Switch>
      <Footer />
      </Router>
    </div>
  )
}

export default App;
