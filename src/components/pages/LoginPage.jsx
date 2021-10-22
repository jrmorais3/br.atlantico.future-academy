import React,{Component}from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../forms/LoginForm';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login} from '../../actions/auth';
import './LoginPage.css';
import Header from '../Shared/Header(fixed)/headerFixed';
import TopMenu from '../Shared/topMenu';

class LoginPage extends Component{

    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
    }

    submit=(data)=>{
        return this.props.login(data)
            .then(() => this.props.history.push("/forum"));
    }
    render(){
        return(
            <div className = "Login-Page-Body">
                <Header/>
                <TopMenu/>
                <div className = "Login-Page-Head">
                <h1 className = "Login-title">Login Page</h1>
                <LoginForm submit={this.submit}/><br/>
                <div className = "To-signup">Don't have an account? <Link to="/signup">Sign up here</Link></div>
                </div>
            </div>
        )
}
}
LoginPage.propTypes= {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, {login})(LoginPage);