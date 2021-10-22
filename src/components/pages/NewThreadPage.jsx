import React,{Component} from 'react';
import NewThreadForm from '../forms/NewThreadForm'
import {connect} from 'react-redux'
import {Segment} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import axios from 'axios'
import {createThread} from '../../actions/thread';
import NavBar from '../misc/Navigation';

class NewThreadPage extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this);
    }
    submit = (data) =>{
        return this.props.createThread(data)
            .then(() => this.props.history.push("/"));
    }
    render(){
        return(
            <div>
                <NavBar />
                <Segment style = {{background: "#ED4832"}}>
                    <h2>Create a new thread</h2>
                    <NewThreadForm submit={this.submit}/>
                </Segment>
            </div>
        )

    }
}
NewThreadPage.propTypes= {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    createThread: PropTypes.func.isRequired
}

export default connect(null, {createThread})(NewThreadPage)