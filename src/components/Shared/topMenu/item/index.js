import React, { Component } from 'react'
import './index.css';

class Item extends Component {
    constructor(props) {
        super(props)
            this.text = props.text
        }
    
    render() {
        return (
            <div className='top-menu-item'>
                {this.text}
            </div>
        )
    }
}

export default Item
