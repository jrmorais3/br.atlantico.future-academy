import React from 'react';
import facultyList from './facultyList';
import FacultyCard from './FacultyCard';
import ContatoForm from '../../forms/ContatoForm';

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
            <main className='Society-main'>
                <div className='Society-Heading'>
                    <hr />
                    <h2>Contato</h2>
                    <hr />
                </div>
                
                <div className='Society-Context'>
                    <div className='Society-Content'>
                        <ContatoForm submit={this.submit}/><br/>
                    </div>
                </div>
            </main>
        )
    }
}

export default SocietyMain;