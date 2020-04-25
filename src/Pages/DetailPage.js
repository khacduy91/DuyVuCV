import React from 'react';
import queryString from 'query-string'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductDetailSendo, addToCart, login, getIndexImage, addToCartDetailPage, getIndexCart } from '../actions'
import ImageDetail from '../component/ImageDetail.js';
import '../App.css'
import { Row, Col, Container } from 'react-bootstrap'
import { BASE_URL_IMAGE } from '../apis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

class DetailPage extends React.Component {
    componentDidMount() {
        const parsed = queryString.parse(window.location.search)
        const id = parsed.id
        this.props.getProductDetailSendo(id)
        console.log('chạy')
    }
    handleAddToCart = () => {
        const { product } = this.props
        // if (this.props.loginStatus == false) {
        //     alert('ban can dang nhap')
        // } else {
        //     this.props.addToCartDetailPage(product)
        // }
        this.props.addToCartDetailPage(product)
        const parsed = queryString.parse(window.location.search)
        const index = parsed.index
        this.props.getIndexCart(index)
    }
    previousImage = () => {
        let { product, indexImage } = this.props
        console.log(indexImage - 1)
        this.props.getIndexImage(indexImage - 1 == -1 ? indexImage = product.images.length - 1 : indexImage - 1)
    }
    nextImage = () => {
        let { product, indexImage } = this.props
        console.log(indexImage + 1)
        this.props.getIndexImage(indexImage + 1 > product.images.length - 1 ? indexImage = 0 : indexImage + 1)
    }
    render() {
        const { product, indexImage } = this.props
        return (
            <Container>
                {product && <Row xs={1} md={2} className='detailPage'>
                    <Col className='rightDetailPage'>
                        <div className='bigImage'>
                            <button className='previousImg' onClick={this.previousImage}><FontAwesomeIcon icon={faChevronLeft} /></button>
                            <button className='nextImg' onClick={this.nextImage}><FontAwesomeIcon icon={faChevronRight} /></button>
                            <img src={BASE_URL_IMAGE + product.images[indexImage]}></img>
                        </div>
                        {product.images.map((item, index) => (
                            <ImageDetail item={item} product={product} index={index} />))}
                    </Col>
                    <Col >
                        <div className='productDetail'>
                            <p>category_id: {product.category_id}</p>
                            <p>Tên: {product.name}</p>
                            <p>Giá: <strong>{product.price}</strong></p>
                            <button className='addToCartDetailPage' onClick={() => this.handleAddToCart()}><span>AddToCart</span></button>
                        </div>
                    </Col>
                </Row>}
            </Container>
        )
    }
}

DetailPage.deafaultProps = {
    product: undefined,
}
const mapsStateToProps = state => ({
    product: state.product,
    index: state.index,
    id: state.id,
    loginStatus: state.loginStatus,
    indexImage: state.indexImage
})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProductDetailSendo, addToCart, login, getIndexImage, addToCartDetailPage, getIndexCart }, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(DetailPage);
