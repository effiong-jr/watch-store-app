import React from 'react';
import {connect } from 'react-redux';
import {Image, Button} from 'react-bootstrap';
import {addToCart} from '../../redux/actions/actionCreators';
import './index.scss';


class FullWatchDetails extends React.Component {
    state = {
        buttonValue: "Add To Cart"
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    addToCart = (id, total) => {
        const runCheck = this.props.cartItems.filter( item => item.id === id );
            if(runCheck.length > 0) {
                alert("Item already in Cart!");
                return;
            } else {
                this.props.addToCart(id, total);
                this.setState({buttonValue: "Added to Cart"});
            }
    }

    render() {
        const { buttonValue } = this.state;
        const getWatch = this.props.watchDetails.filter( watch => watch.name === this.props.match.params.name)[0];
        const specifications = getWatch.specification.map( (spec, index) => <li key={index}>{spec}</li> );

        return (
            <div key={getWatch.id} className="fullDescriptionContainer">
                <h3 className="heading">{getWatch.name}</h3>
    
                <div className=" row col-md-10 col-xs-12 offset-md-2">
                    <div className="row col-12 image-container">
                        <div className="col-sm-8 col-xs-12 text-center image">
                            <Image src={getWatch.url} style={{ maxWidth: 250}} fluid/>
                        </div>
                        <div className="col-sm-4">
                            <section>
                                <h5>{getWatch.name}</h5>
                                <div>&#8358;{getWatch.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                                <Button onClick={(id, price)=>this.addToCart(getWatch.id, getWatch.price)}>{buttonValue}</Button>
                            </section>
                        </div>
                    </div>
    
                    <div>
                        <div className="col-md-10">
                            <h3>At A Glance...</h3>
                            <hr />
                            <div>
                                <h4>{getWatch.title}</h4>
                                <p>{getWatch.description}</p>
                            </div>
    
                            <div>
                                <h4>Specifications</h4>
                                <hr />
                                <ul>
                                    {specifications}
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        watchDetails: state.watch,
        cartItems : state.cart.items,
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        addToCart: (id, price) => dispatch(addToCart(id, price))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(FullWatchDetails);