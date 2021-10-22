import React from 'react';
import opportunityList from './opportunityList';
import OpportunityCard from './OpportunityCard';

class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            data: opportunityList
        }
    }
    render()
    {
        const opportunityData = this.state.data.map(item => <OpportunityCard key={item.name} item={item}/>)
        return (
            <main>
                <div className='Opportunities-Heading'>
                    <hr />
                    <h2> Opportunities </ h2>
                    <hr />
                </div>
                
                <div className='Context'>
                    <div className='Opportunities-Content'>
                        {opportunityData}
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;