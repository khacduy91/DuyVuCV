import React, { Component } from 'react';
import ProductCard from '../component/ProductCard.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filter } from '../actions'
import { getProductsSendo } from '../actions'
import '../App.css'

class ListPage extends React.Component {
    // // state = { query: '' }
    componentWillUnmount(){
        this.props.getProductsSendo(this.props.query,1,true)
    }
    handleLoadmore = () => {
        let {page,isFilter} = this.props
        page++;
        this.props.getProductsSendo(this.props.query,page,false,isFilter)
    }
    render() {
        const { errMsg, status, index } = this.props;
        console.log('index ' +index)
        return (
            <div className={'container'}>
                <div className='products'>
                    {this.props.products.map((item, index) => (
                        <ProductCard product={item} index={index} key={index} />
                    ))}</div>
                {status === 'start' && <img style={{marginLeft:'100px'}} src='https://raw.githubusercontent.com/khacduy91/DuyVuCV/gh-pages/newgif.gif'></img>}
                {status === 'fail' && <p>{errMsg}</p>}

                <button className='btnLoadmore' onClick={this.handleLoadmore}>Load more</button>

            </div>
        )
    }
}
ListPage.defaultProps = {
    products: [],
    category: '',
    cart:[],
    query:'',
    indexImage: 0,
    
}

const mapsStateToProps = state => ({
    products: state.products,
    category: state.category,
    index: state.index,
    errMsg: state.errMsg,
    status: state.status,
    page: state.page,
    query: state.query,
    cart: state.cart,
    isFilter: state.isFilter
})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ filter, getProductsSendo }, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(ListPage);
