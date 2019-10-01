import React from 'react';
import { connect } from 'react-redux';
import {Image, Button, ButtonGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {increaseQuantityByOne, decreaseQuantityByOne, deleteFromCart} from '../../redux/actions/actionCreators';
import './index.scss';

class Cart extends React.Component {


    handleQuantityIncrease = (id, price) => {
        this.props.addOne(id, price);
    }

    handleQuantityDecrease = (id, price) => {
        this.props.subtractOne(id, price);
    }
    handleDeleteItem = (id) => {
        this.props.deleteItem(id);
    }
    
    calculateTotal(total) {
        console.log(total);
    }


    render() {
        const cartItems = this.props.cartItems.map( item => {
            return(
                <Item 
                    key={item.id}
                    id={item.id}
                    url = {item.url}
                    name= {item.name}
                    price = {item.price}
                    quantity = {item.quantity}
                    increaseQuantity = {this.handleQuantityIncrease}
                    decreaseQuantity = {this.handleQuantityDecrease}
                    deleteItem = {this.handleDeleteItem}
                />
            )
        })

        return(
            <div className="cartContainer row">
                <div className="cartSection col-12 col-md-6 offset-md-2">
                    <h4>Your Cart</h4>
                    <div className="cartItems row">{cartItems}</div>
                    <div className="orderTotal">
                        <strong>Order Total: &#8358;{ this.props.totalAmount.toLocaleString(undefined, {minimumFractionDigits: 2}) }</strong>
                    </div>
                </div>
                <div className="summarySection col-12 col-md-3">
                    <h5 className="text-center">Summary</h5>
                    <hr />
                    <div>
                        <p>{this.props.cartItems.length} {this.props.cartItems.length > 1? "items" : "item"}</p>
                        <p>Shipping: Free</p>
                        <p>VAT: 2%</p>
                    </div>
                    <hr />
                    <div>
                        <p id="grandTotal">Grand Total: &#8358;{ ( this.props.totalAmount + (this.props.totalAmount / 100) * 2).toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
                    </div>
                    <hr />
                    <Button variant="secondary" block>Checkout</Button>
                </div>
            </div>
        )
    }
}


const Item = (props) => (
    <div key={props.id} className="cartItem">
        <div className="itemImage">
            <Image src={props.url} fluid/>
        </div>
        <div className="name" >
            <h6>{props.name}</h6>
        </div>
        <div className="btnGroup">
            <ButtonGroup  >
                <Button variant="outline-secondary" className="btn-sm" onClick={(id, price)=>props.decreaseQuantity(props.id, props.price)}>-</Button>
                    <div className="quantity text-center align-self-center" style={{ width: 20}}> {props.quantity} </div>
                <Button variant="outline-secondary" className="btn-sm" onClick={(id, price)=>props.increaseQuantity(props.id, props.price)}>+</Button>
            </ButtonGroup>
            <br />
            
        </div>
        <div className="price">
            <span> &#8358;{ (props.price).toLocaleString(undefined, {minimumFractionDigits: 2}) }</span>
        </div>
        <div className="closeBtn">
            <Button variant="link" className="deleteBtn" onClick={(id)=>props.deleteItem(props.id)}>
                <FontAwesomeIcon icon={faTimes} />
            </Button>
        </div>
    </div>
);


//Filter and return ONLY items from watches whos ids are in the cart.
function watchesInCart (collection, cartItems) {
    const getFromCollection = cartItems.map( itemInCart => {
        const filteredCollection = collection.filter( collectionItem =>  collectionItem.id === itemInCart.id);
        return Object.assign({}, ...filteredCollection, itemInCart);
    });

    return getFromCollection.flat();
}

const mapStateToProps = state => {

    const watchCollection = state.watch;
    const cart = state.cart.items;
    const totalAmount = state.cart.sumTotal;
    
    return {
        cartItems: watchesInCart(watchCollection, cart),
        totalAmount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOne: (id, price) => dispatch(increaseQuantityByOne(id, price)),
        subtractOne: (id, price) => dispatch(decreaseQuantityByOne(id, price)),
        deleteItem : (id) => dispatch(deleteFromCart(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);