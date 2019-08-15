import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import LandingPage from './Landing';
import FullWatchDetails from './Watch';
import './App.css';

const App = (props) => (
    <div className="App">
        <Router>
            <Header />
            <main className="container">
                <Route exact path="/" render={()=> <LandingPage />} />
                <Route path="/watch/:name" component={FullWatchDetails} />
            </main>
        </Router>
    </div>
);

export default App;