import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const GuestRoute = ({isAuthenticated, component:Component, ...rest}) =>(
    // <Route {...rest} render={props => !isAuthenticated ? <Component {...props}/> : <Redirect to="/"/>}/>
    <Route {...rest} render={props => <Component {...props}/> }/>
)
GuestRoute.propTypes ={
    component:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool.isRequired
};
function mapStateToProps(state){
    return{
        isAuthenticated:!!state.user.token
    }
}

export default connect(mapStateToProps)(GuestRoute);