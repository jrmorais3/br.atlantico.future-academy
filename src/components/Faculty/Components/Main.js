import React from 'react';
import facultyList from './facultyList';
import FacultyCard from './FacultyCard';

class FacultyMain extends React.Component{
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
                <div className='Faculty-Heading'>
                    <hr />
                    <h2>Agendamento</h2>
                    <hr />
                </div>
                    
                
                <div className='Faculty-Context' >
                    <div className='Faculty-Content'>
                        {facultyData}
                    </div>
                </div>
            </main>
        )
    }
}

export default FacultyMain;