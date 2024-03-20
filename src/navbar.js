import {Link} from 'react-router-dom' 


let ControlPanel = ({changer}) => {
    
    return (
        <ul className='flexer'>
            <li 
            id='first' onClick={()=>changer('createUser')}>Create Users</li>
            <li 
            onClick={()=>changer('getUsers')}
            >Users</li>
            <li onClick={()=>changer('createExcercise')}
            >Create Excercise</li>
            <li onClick={()=>changer('getExcercises')}
            >Excercises Table</li>
        </ul>
        )
}

export default ControlPanel