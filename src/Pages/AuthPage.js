import React from 'react';
import products from '../data/products.json'
import { bindActionCreators } from 'redux';
import {login} from '../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect} from 'react-router-dom'
class AuthPage extends React.Component {
    state = {
        username: '',
        password: '',
    }
    handleChangeUsername = (event)=>{
        this.setState({username:event.target.value})
    }
    handleChangePassword= (event)=>{
        this.setState({password:event.target.value})
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        this.props.login(this.state.username,this.state.password)
    }

    render() {
        const {auth} = this.props
        if(auth.isLogged){
            return <Redirect to='/porfolio' />
        }
        console.log(auth.isLogged)
        return (
            <div>
                <h1>Login form</h1>
                {!auth.isLogged && <h4 style={{color:'red'}}>{auth.message}</h4>}
                <form >
                    <input onChange={this.handleChangeUsername} placeholder='username'></input>
                    <input type='password' onChange={this.handleChangePassword} placeholder='password'></input>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({login},dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(AuthPage);
