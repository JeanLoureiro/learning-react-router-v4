import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

const Child = ({match}) => (<h3>ID: {match.params.id}</h3>)

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <ul>
                 <li><Link to="/netflix">Netflix</Link></li>
                 <li><Link to="/zillow-group">Zillow Group</Link></li>
                 <li><Link to="/yahoo">Yahoo</Link></li>
                 <li><Link to="/modus-create">Modus Create</Link></li>
               </ul>
               <Route path="/:id" component={Child} />
            </div>
        </Router>
    );
  }
}

export default App;
