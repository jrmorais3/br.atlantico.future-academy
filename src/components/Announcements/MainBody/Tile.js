import React from 'react';
import Circular from './Circular'
import data from '../Data/data'
import { Grid } from '@material-ui/core';

class Tile extends React.Component{
    constructor() {
        super();
        this.state = {
            start: 1,
            end: 5
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(num) {
        this.setState(() => {
            let x = num * 5;
            let y = x - 4;
            return({start: y, end: x});
        });
    }

    render() {
        const circulars = data.map(item => {
            if(item.id >= this.state.start && item.id <= this.state.end)
                return (<Circular title={item.title} issuedBy={item.issuedBy} />);
        });
        // 
        return (
                <div class="announcementTile">
                    <Grid container className="topgrid-review-more">
                        <Grid item xs={4}>
                            <div className="announcementTileHeading">
                                <hr /> 
                                <h2>Announcements</h2> 
                                <hr />
                            </div>
                        </Grid>

                        <Grid item xs={8}>
                            <div className="announcementTileContent">
                                {circulars}
                                <div className="change-page">
                                        <span className="change-page-buttons" onClick={() => this.handleClick((this.state.end / 5) - 1 > 0 ? (this.state.end/5) - 1 : 3)}> &lt;&lt; </span>
                                        <span className="change-page-buttons" onClick={() => this.handleClick(1)}>1</span>
                                        <span className="change-page-buttons" onClick={() => this.handleClick(2)}>2</span>
                                        <span className="change-page-buttons" onClick={() => this.handleClick(3)}>3</span>
                                        <span className="change-page-buttons" onClick={() => this.handleClick((this.state.end/5) + 1 > 3 ? 1 : (this.state.end/5) + 1)}> &gt;&gt; </span>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
        );
    }
}

export default Tile;
