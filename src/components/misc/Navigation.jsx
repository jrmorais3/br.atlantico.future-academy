import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {logout} from '../../actions/auth'

const NavBar = ({username,logout}) => (
    <Menu secondary pointing >
        <Menu.Item as={Link} to='/' style={{color:"white", fontSize: "20px"}}>Home</Menu.Item>
        <Menu.Item as={Link} to={`/users/${username}`} style={{color:"white", fontSize: "20px"}}>{username}</Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/newthread' style={{color:"white", fontSize: "20px"}}>New</Menu.Item>
            <Menu.Item onClick={() => logout()} style={{color:"white", fontSize: "20px"}}>Logout</Menu.Item>
        </Menu.Menu>
    </Menu>
);


NavBar.propTypes = {
    username:PropTypes.string.isRequired,
    logout:PropTypes.func.isRequired

};
function mapStateToProps(state){
    return{
        username:state.user.username
    }
}

export default connect(mapStateToProps,{logout})(NavBar);

