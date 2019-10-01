import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import LandingPage from './Landing';
import FullWatchDetails from './Watch';
import Cart from './Cart';
import Login from '../components/user/Login';
import SignUp from '../components/user/Signup';
import './App.css';
import Footer from './Footer';

const App = (props) => (
    <div className="App">
        <Router>
            <Header />
            <div id="mainContainer">
                <main className="container">
                    <Route exact path="/" render={()=> <LandingPage />} />
                    <Route path="/watch/:name" component={FullWatchDetails} />
                    <Route path="/your-cart/" component={Cart} />
                    <Route path="/user/login/" component={Login} />
                    <Route path="/user/signup/" component={SignUp}/>
                </main>
            </div>
            <Footer />
        </Router>
    </div>
);

export default App;