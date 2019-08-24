import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import LandingPage from './Landing';
import FullWatchDetails from './Watch';
import Cart from './Cart';
import Login from '../components/user/Login';
import SignUp from '../components/user/Signup';
import './App.css';

const App = (props) => (
    <div className="App">
        <Router>
            <Header />
            <main className="container">
                <Route exact path="/" render={()=> <LandingPage />} />
                <Route path="/watch/:name" component={FullWatchDetails} />
                <Route path="/your-cart/" component={Cart} />
                <Route path="/user/login/" component={Login} />
                <Route path="/user/signup/" component={SignUp}/>
            </main>
        </Router>
    </div>
);

export default App;