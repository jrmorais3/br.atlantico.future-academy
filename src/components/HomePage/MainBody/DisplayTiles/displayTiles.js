import React from 'react';
import Tile from './Tile12';
import data from '../../Data/data'

class DisplayTiles extends React.Component {
    constructor() {
        super();
        this.state = {
            navbarState : 1,
            style : {}
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => {
            if(prevState.navbarState === 0) {
                return {navbarState : 1, style : {width : '250px'}};
            }
            else {
                return {navbarState : 0, style : {width : '0px'}};
            }
        });
    }

    render() {
        const tileData = data.map(item => <Tile title={item.title} content={item.content} />);
        return (
            <div className="grid-container">
                {tileData}
            </div>
        );
    }
}

export default DisplayTiles;
           
           
           
           