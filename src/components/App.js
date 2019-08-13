import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import LandingPage from './Landing';
import './App.css';

const App = (props) => (
    <div className="App">
        <Header />
        <Container >
            <LandingPage />
        </Container>
    </div>
);

export default App;