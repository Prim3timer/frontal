import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EditExcercise from './editExcercise'

import Content from './Content'
let Excercises = ({excercises, setExcercises, removeExcercise,
setIsWhat, isWhat,
marker, setMarker}) =>{
  
    const [search, setSearch] = useState('')
    const [isEdit,setIsEdit] = useState(false)
    const changeMarker = (id)=> {
        setMarker(id)
    }
    
    return (
        <div>
           
            {isEdit ? <EditExcercise id={marker} 
            setIsWhat={setIsWhat}/>
            : <Content 
                excercises={excercises.filter((ex) => ex.username.toLowerCase().includes(search.toLowerCase()))}
                setExcercises={setExcercises} 
                removeExcercise={removeExcercise}
                marker={marker}
                setMarker={setMarker}
                isWhat={isWhat}
                setIsWhat={setIsWhat}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                changeMarker={changeMarker}
                search={search}
                setSearch={setSearch}
            />}
        </div>
    )
}


export default Excercises