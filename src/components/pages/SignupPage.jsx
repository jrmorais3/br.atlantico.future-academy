import React,{Component}from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signup} from '../../actions/auth';
import Header from '../Shared/Header(fixed)/headerFixed';
import TopMenu from '../Shared/topMenu';
import SignupForm from '../forms/SignupForm';

class SignupPage extends Component{

    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
    }

    submit = (data) =>{
        console.log("Mar jayega tu", data);
        return this.props.signup(data)
            .then((res) =>{ 
                console.log(res.data.user)
                this.props.history.push("/forum")
        });
    }
    render(){
        return(
            <div style = {{width: "100vw", marginLeft: "-28vw"}}>
                <Header/>
                <TopMenu/>
                <div style = {{paddingTop: "14vw"}}>
                <h1 style = {{marginLeft: "60vw"}}>Signup Page</h1>
                <SignupForm submit={this.submit}/><br/>
                <div style = {{marginLeft: "58vw"}}>Already have an account? <Link to="/login">Login here</Link></div>
                </div>
            </div>
        )
    }
}
SignupPage.propTypes= {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
}

export default connect(null, {signup})(SignupPage);
