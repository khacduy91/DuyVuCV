import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductsSendo, getMinPrice, getMaxPrice } from '../actions'
import { Link } from 'react-router-dom';
import '../App.css'
import HandleCurrency from '../HandleCurrency'

class Category extends React.Component {
    state = {
        query: '',
        minPriceValue: '',
        maxPriceValue: '',
        queryvalue: ''
    }
    Search = (event) => {
        this.state.query = event.target.value
        this.props.getProductsSendo(this.state.query, 1, true)
    }
    handleChange = (event) => {
        const queryvalue = event.target.value
        this.setState({ ...this.state, queryvalue: queryvalue, query: queryvalue })
    }
    handleMinPriceChange = (event) => {
        const minPrice = parseInt(event.target.value, 10)
        this.props.getMinPrice(minPrice)
        this.setState({ ...this.state, minPriceValue: minPrice })
    }
    handleMaxPriceChange = (event) => {
        const maxPrice = parseInt(event.target.value, 10)
        this.props.getMaxPrice(maxPrice)
        this.setState({ ...this.state, maxPriceValue: maxPrice })
    }
    handleFilterSubmit = () => {
        this.props.getProductsSendo(this.state.query, 1, true, true)
        this.setState({ ...this.state, queryvalue: '', maxPriceValue: 0, minPriceValue: 0 })

    }
    render() {
        
        return (
            <div>
                <div className='category'>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Iphone" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Samsung" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Oppo" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Sony" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Huawei" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Vivo" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Vsmart" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Realme" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Mobell" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Nokia" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="BlackBerry" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Lenovo" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Coolpad" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Ipad" /></Link>
                    <Link to='/DuyVuCV/porfolio'><input type='button' onClick={this.Search} value="Galaxy Tab" /></Link>
                </div>
                <div>
                    <form onSubmit={() => <Link to='/DuyVuCV/porfolio'>{this.handleFilterSubmit}</Link>}>
                        <div className='formFilter'>
                            <input type='text' onChange={this.handleChange} value={this.state.queryvalue} required></input>
                            <label className='labelname'>
                                <span className='contentname'>Tên sản phẩm:</span>
                            </label>
                        </div>
                        <div className='formFilter height'>
                            <input  className='price' type='number' placeholder='Min Price' onChange={this.handleMinPriceChange} value={this.state.minPriceValue} required></input>
                            <label className='labelprice'>
                                <span className='contentprice'>Giá từ</span>
                            </label>
                        </div>
                        <div className='formFilter height' >
                            <input className='price' type='number' placeholder='Max Price' onChange={this.handleMaxPriceChange} value={this.state.maxPriceValue} required></input>
                            <label className='labelprice'>
                                <span className='contentprice'>đến</span>
                            </label>
                        </div>
                        <Link to='/DuyVuCV/porfolio'><button className='submitForm' onClick={this.handleFilterSubmit}>Search</button></Link>
                    </form>
                </div>
            </div>

        )
    }
}
const mapsStateToProps = state => ({
    query: state.query,
    productsByPrice: state.productsByPrice,
    priceValueFilter: state.priceValueFilter,
    value: state.value,
    minPrice: state.minPrice,
    maxPrice: state.maxPrice
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProductsSendo, getMinPrice, getMaxPrice }, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(Category);
