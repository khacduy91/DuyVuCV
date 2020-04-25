import React from 'react';
import { Link } from 'react-router-dom'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProductsSendo, addToCart,login} from '../actions'
import '../App.css'
import HandleCurrency from '../HandleCurrency'

class ProductCard extends React.Component {
    handleAddToCart = (index) => {
        console.log('isLogin :' +this.props.loginStatus)
        // if(this.props.loginStatus == false){
        //     alert('ban can dang nhap')
        // } else {this.props.addToCart(index)} 
        this.props.addToCart(index)
    }
    render() {
        const { product, index} = this.props;
        return (
            <div className='product'>
                <Link to={`/detail?id=${product.id}&name=${product.name}&index=${index}`}>
                        <img className='imgProduct' src={product.img_url} />
                </Link>
                <p className='product-name'>{product.name}</p>
                <p className='product-price'>{HandleCurrency.format(product.price)}</p>
                <button className='addToCartDetailPage' onClick={()=>this.handleAddToCart(index)}><span>AddToCart</span></button>
            </div>
        )
    }
}
ProductCard.defaultProps = {
    products: [],
    category: '',
}

const mapStateToProps = state =>({
    products: state.products,
    category: state.category,
    cart: state.cart,
    auth: state.auth,
    loginStatus:state.loginStatus
})

const mapDispatchToProps = dispatch =>({
    ...bindActionCreators({getProductsSendo,addToCart,login},dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps) (ProductCard);
