import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, getPrice } from '../actions'
import { BASE_URL_IMAGE } from '../apis';


class CartDetail extends React.Component {
    state = { number: '0', }
    render() {
        const { cart, index , indexCart} = this.props
        return (
            <div>
                <Link style={{ textDecoration: 'none' }} to={`/detail?id=${cart[index].id || cart[index].product_id}&name=${cart[index].name}&index=${indexCart[index]}`}>
                    <div>
                        <div className='cartDetail'>
                            <img src={cart[index].img_url || BASE_URL_IMAGE + cart[index].images[0]} />
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

const mapsStateToProps = state => ({
    cart: state.cart,
    product: state.propduct,
    indexCart: state.indexCart
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ addToCart, getPrice }, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(CartDetail);