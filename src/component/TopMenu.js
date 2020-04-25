import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductsSendo, deleteCart } from '../actions';
import { login } from '../actions';
import '../App.css'
import { Button } from 'react-bootstrap'
import { CardText } from 'react-bootstrap/Card';


class TopMenu extends React.Component {
    state = {
        username: '',
        password: '',
    }
    componentDidMount() {
        this.props.getProductsSendo(this.props.query, 1)
    }
    handleChange = (event) => {
        this.setState({ ...this.state, query: event.target.value, value: event.target.value })
        console.log('query ' + this.state.query)
    }
    handleSearch = (event) => {
        // event.preventDefaulte(event)
        console.log('a: ' + this.state.query)
        this.props.getProductsSendo(this.state.query, 1, true)
    }
    handleChangeUsername = (event) => {
        this.setState({ username: event.target.value })
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state.username, this.state.password)
    }
    handleLogut = (event) => {
        event.preventDefault()
        this.props.login('logout', '123456')
        this.props.deleteCart()
    }
    render() {
        const { auth } = this.props
        return (
            <div className='TopMenu'>
                <div className='link'>
                    <a href='/DuyVuCV/' >My CV</a>
                    <Link to='/porfolio/list'>Product List</Link>
                    <Link to='/login'>Login</Link>
                </div>
                <div className='search'>
                    <form onSubmit={() => <Link to='/porfolio/list'>{this.handleSearch}</Link>}>
                        <input type='text' placeholder='type what you want' onChange={this.handleChange}></input>
                        <Link to='/porfolio/list' ><button onClick={this.handleSearch}>Search</button></Link>
                    </form>

                </div>
                <div className='login'>
                    {!auth.isLogged && <h4 style={!auth.isLogged == true ? { display: 'none' } : { display: 'block' }}>{auth.message}</h4>}
                    <div className='loginform'>
                        <input style={!auth.isLogged !== true ? { display: 'none' } : { display: 'inline-block' }} onChange={this.handleChangeUsername} placeholder='username'></input>
                        <input style={!auth.isLogged !== true ? { display: 'none' } : { display: 'inline-block' }} type='password' onChange={this.handleChangePassword} placeholder='password'></input>
                        <button style={!auth.isLogged !== true ? { display: 'none' } : { display: 'inline-block' }} onClick={this.handleSubmit}>login</button>
                        <button style={!auth.isLogged == true ? { display: 'none' } : ({ display: 'inline-block' })} onClick={this.handleLogut}>logout</button>
                    </div>

                </div>
            </div >
        )
    }
}
const mapsStateToProps = state => ({
    query: state.query,
    value: state.value,
    auth: state.auth,
    cart: state.cart,
    totalPrice: state.totalPrice,
    inputCart: state.inputCart,
    indexCart: state.indexCart
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getProductsSendo, login, deleteCart }, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(TopMenu);
