import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartDetail from '../component/CartDetail.js';
import { addToCart, getPrice, getInputCart } from '../actions'
import { login } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import HandleCurrency from '../HandleCurrency'

class Cart extends React.Component {
    state = {
        cartOpen: false,
    }
    inputChange = (index, event) => {
        const num = event.target.value
        const priceIndex = this.props.cart[index].price * num
        this.props.getPrice(priceIndex, index)
        this.props.getInputCart(num, index)
    }
    handleDelete = (index) => {
        const { cart, totalPrice, inputCart, indexCart } = this.props
        cart.splice(index, 1)
        totalPrice.splice(index, 1)
        inputCart.splice(index, 1)
        indexCart.splice(index, 1)
        this.setState({ ...this.state, cart: [...cart], totalPrice: [...totalPrice] })
    }
    openCart = () => {
        const cartDisplayMobile = document.getElementById('cartDisplayMobile')
        cartDisplayMobile.style.bottom = "0"
        cartDisplayMobile.style.transition ="0.5s"
        this.setState({...this.state, cartOpen : !this.state.cartOpen})
    }
    closeCart = () => {
        const cartDisplayMobile = document.getElementById('cartDisplayMobile')
        cartDisplayMobile.style.bottom = "-100%"
        cartDisplayMobile.style.transition ="0.5s"
        this.setState({...this.state, cartOpen : !this.state.cartOpen})
    }
    render() {
        const { cart, totalPrice, inputCart } = this.props
        let sum = 0
        for (var i = 0; i < totalPrice.length; i++) {
            sum += totalPrice[i];
        }
        return (
            <div>
                <div className='cart'>
                    <div style={cart.length != 0 ? { display: 'block' } : { display: 'none' }}>
                        <strong style={cart.length != 0 ? { display: 'block' } : { display: 'none' }}>Giỏ hàng của bạn</strong>
                        <table style={{ width: '100%' }}>
                            {this.props.cart.map((item, index) => (
                                <tbody>
                                    <tr>
                                        <td><p className='item-name'>{item.name}</p></td>
                                        <td></td>
                                        <td><button type='button' onClick={() => this.handleDelete(index)} className='deleteButton'>
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button></td>
                                    </tr>
                                    <tr>
                                        <td> <CartDetail cart={item} index={index} /></td>
                                        <td index={index}><input className='inputCart' type='number' defaultValue='1' onChange={(event) => this.inputChange(index, event)} value={inputCart[index]}></input></td>
                                        <td className='price'>{HandleCurrency.format(totalPrice[index])}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                        <p style={cart.length != 0 ? { display: 'block' } : { display: 'none' }, { textAlign: 'right' }}>Total: <strong>{HandleCurrency.format(sum)}</strong></p>
                        <hr className='hr' style={cart.length != 0 ? { display: 'block' } : { display: 'none' }}></hr>
                    </div>
                </div>
                <div class='mobileCartPosition'>
                    <div class='mobileCart'>
                        <a onClick={this.state.cartOpen == false ? this.openCart : this.closeCart}><div>SLL: {cart.length}</div></a>
                        <div><p>TOTAL</p></div>
                        <div>THANH TOAN</div>
                    </div>
                </div>
                <div class='cartDisplayMobile' id="cartDisplayMobile">
                    <div class='closeCart' onClick={this.closeCart}>x</div>
                    <table style={{ width: '100%' }}>
                        {this.props.cart.map((item, index) => (
                            <tbody>
                                <tr>
                                    <td><p className='item-name'>{item.name}</p></td>
                                    <td></td>
                                    <td><button type='button' onClick={() => this.handleDelete(index)} className='deleteButton'>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button></td>
                                </tr>
                                <tr>
                                    <td> <CartDetail cart={item} index={index} /></td>
                                    <td index={index}><input className='inputCart' type='number' defaultValue='1' onChange={(event) => this.inputChange(index, event)} value={inputCart[index]}></input></td>
                                    <td className='price'>{HandleCurrency.format(totalPrice[index])}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        )
    }
}
const mapsStateToProps = state => ({
    cart: state.cart,
    totalPrice: state.totalPrice,
    inputCart: state.inputCart,
    indexCart: state.indexCart
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ addToCart, getPrice, getInputCart }, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(Cart);
