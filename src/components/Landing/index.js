import React from 'react';
import Image from 'react-bootstrap/Image';
import bannerImage from '../../assets/images/banner-image.jpg';
import LineUp from '../Collection';
import './index.scss';

const LandingPage = (props) => (
    <div className="landingPage">
        <h3>G-Shock</h3>
        <div className="bannerImage-container">
            <Image src={bannerImage} fluid/>
        </div>
            <p className="intro-text">CASIO’s shock-resistant G-SHOCK watch is synonymous with toughness, 
                born from the developer Mr. Ibe’s dream of ‘creating a watch that never breaks’. 
                Over 200 handmade samples were created and tested to destruction until finally in 1983 the first, 
                now iconic G-SHOCK hit the streets of Japan and began to establish itself as ‘the toughest watch of all time’. 
                Each watch encompasses the 7 elements; electric shock resistance, gravity resistance, 
                low temperature resistance, vibration resistance, water resistance, shock resistance and toughness. 
                The watch is packed with Casio innovations and technologies to prevent it from suffering direct shock; 
                this includes internal components protected with urethane and suspended timekeeping modules inside the watch structure. 
                Since its launch, G-SHOCK has continued to evolve, continuing to support on Mr. Ibe’s mantra “never, never give up.”
            </p>
            <LineUp />
    </div>
);

export default LandingPage;