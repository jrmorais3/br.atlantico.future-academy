import React, { Component } from 'react';
import Item from './item';
import Lead from './lead';
import { NavLink, Link } from "react-router-dom";
import './index.css'

class TopMenu extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                menu_class: '',
            }
        }

        setToggleMenuClass = () =>{
            if(this.state.menu_class === ''){
                this.setState({
                    menu_class: 'toggled',
                })
            } else{
                this.setState({
                    menu_class: '',
                })
            }
        }
        
        render = () =>{
            let top_menu_class = `top-menu ${this.state.menu_class}`
            return (
                <div>
                    <div className = {top_menu_class}>
                        <Lead text=''></Lead>
                        <div className = 'left'>

                        <NavLink to="/">
                            <Item text='HOME'/>
                        </NavLink>

                        <NavLink to="/about">
                            <Item text='QUEM SOMOS'/>
                        </NavLink>

                        <NavLink to="/agendamento">
                            <Item text='AGENDE SEU HORÁRIO'/>
                        </NavLink>

                        <NavLink to='/contact'>
                            <Item text='CONTATO'/>
                        </NavLink>



                        </div>
                        <div className= 'right'>
                        <NavLink to='/login'>
                            <Item text='LOGIN'/>
                        </NavLink>
                        </div>                 
                        <div className='clear-fix'/>
                    </div>
                </div>
        )
    }
}

export default TopMenu
