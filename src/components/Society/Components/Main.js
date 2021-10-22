import React from 'react';
import facultyList from './facultyList';
import FacultyCard from './FacultyCard';

class SocietyMain extends React.Component{
    constructor(){
        super()
        this.state = {
            data: facultyList
        }
    }
    render()
    {
        const facultyData = this.state.data.map(item => <FacultyCard key={item.name} item={item}/>)
        return (
            <main>
                <div className='Society-Heading'>
                    <hr />
                    <h2>Societies</h2>
                    <hr />
                </div>
                
                <div className='Context'>
                    <div className='Society-Content'>
                        {facultyData}
                    </div>
                </div>
            </main>
        )
    }
}

export default SocietyMain;