import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image';
import './index.scss';

const LineUp = (props) => {
    const showAll = props.allWatches.map( watch => {
        const {id, url, name, price, title, description } = watch;
        return(
            <DisplayWatch 
                key={id}
                id={id}
                url={url}
                name={name} 
                price={price}
                title={title}
                description ={ description}
                 />
        )
    });

    return (
        <div className="lineupContainer">
            <h2>Line Up</h2>
            <br />
            <div className="lineup">{showAll}</div>
        </div>
    )
}

const DisplayWatch = (props) => {
    //Regex to Check the description text and end at but not including the first fullstop (.).
    const firstSentence = (text) => {
        const regex = /[\w-?,?\s]+/i;
        const sentence = text.match(regex);
        return sentence;
    }
    return(
        <div key={props.id} className="watchCard">
            <Link to={`watch/${props.name}`}>
                <div className="cardImage">
                    <Image src={props.url} alt={props.name} fluid />
                </div>
                <hr />
                <div className="descriptionContainer">
                    <h5 className="watchName">{props.name}</h5>
                    <div className="watchPrice"><strong>&#8358;{props.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</strong></div>
                    <div className="watchTitle">{props.title}</div>
                    <p className="briefDescription">{firstSentence(props.description)}.</p>             
                </div>
            </Link>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        allWatches : state.watch,
    }
}

export default connect(mapStateToProps)(LineUp);