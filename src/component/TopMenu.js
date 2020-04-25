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
        mobileClose: true,
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
    menuOpen = () => {
        const close = this.state
        const span1 = document.getElementById("span1")
        const span2 = document.getElementById("span2")
        const span3 = document.getElementById("span3")
        const mobileMenu = document.getElementById("mobileMenu")

        span2.style.display = "none"
        span1.style.transform = "rotate(45deg) translateY(7px)"
        span1.style.transition = "0.2s"
        span3.style.transform = "rotate(135deg) translateY(7px)"
        span3.style.transition = "0.2s"
        mobileMenu.style.left = "0"

        this.setState({ ...this.state, mobileClose: !this.state.mobileClose })
        console.log(this.state.close)
    }

    menuClose = () => {
        const close = this.state
        const span1 = document.getElementById("span1")
        const span2 = document.getElementById("span2")
        const span3 = document.getElementById("span3")
        const mobileMenu = document.getElementById("mobileMenu")

        span2.style.display = "block"
        span1.style.transform = "rotate(0) translateY(0)"
        span1.style.transition = "1s"
        span3.style.transform = "rotate(0) translateY(0)"
        span3.style.transition = "1s"
        mobileMenu.style.left = "-100%"
        this.setState({ ...this.state, mobileClose: !this.state.mobileClose })
        console.log(this.state.close)
    }
    render() {
        const { auth } = this.props
        return (
            <div class="menuTotal">
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
                <div class='mobileTopMenu'>
                    <div className='mobileSearch'>
                        <form onSubmit={() => <Link to='/porfolio/list'>{this.handleSearch}</Link>}>
                            <input type='text' placeholder='type what you want' onChange={this.handleChange}></input>
                        </form>
                    </div>
                    <a onClick={this.state.mobileClose !== false ? this.menuOpen : this.menuClose} class='hamburgerProject'>
                        <span id='span1'></span>
                        <span id='span2'></span>
                        <span id='span3'></span>
                    </a>
                </div>

                <div id="mobileMenu" class='mobileMenu'>
                    <ul class='mobile'>
                        <div class='mobileLink'>
                            <a onClick={this.menuClose} href='https://khacduy91.github.io/DuyVuCV/#home'><span>My CV</span></a>
                            <Link onClick={this.menuClose} to='/porfolio/list'><span>My Project</span></Link>
                            <a onClick={this.menuClose} href='#'><span>My Category</span></a>
                        </div>
                        <div class='mobileCategory'>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Iphone" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Samsung" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Oppo" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Sony" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Huawei" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Vivo" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Vsmart" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Realme" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Mobell" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Nokia" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="BlackBerry" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Lenovo" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Coolpad" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Ipad" /></Link>
                            <Link onClick={this.menuClose} to='/porfolio/list'><input type='button' onClick={this.Search} value="Galaxy Tab" /></Link>
                        </div>
                    </ul>
                </div>
            </div>
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
