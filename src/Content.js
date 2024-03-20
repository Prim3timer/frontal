
import ItemList from "./ItemList"
import SearchItem from './SearchItem'
import { useState } from "react"

let Content = ({excercises, setExcercises, 
  removeExcercise,
setMarker,
marker,
setIsWhat,
isEdit,
setIsEdit,
changeMarker,
search,
setSearch
})=> {
 
 

const goToEdit = (id)=> {
    setIsEdit(true)
    changeMarker(id)
}   
    return (
      
        <>
         <SearchItem search={search} setSearch={setSearch}/>
          <h2>Logged Excercises</h2>
        <table id='excercise-table' >
        <tbody>
            
            <tr>
                <th>username</th>
                <th>description</th>
                <th>duration</th>
                <th>date</th>
                <th colSpan={2} className='actions'>actions</th>
            </tr>
          {excercises.length ? excercises.map((excercise) => {
            return (


                <tr id={excercise._id} >
                    <td>{excercise.username}</td>
                <td>{excercise.description}</td>
                <td className='duration'>{excercise.duration}</td>
                <td>{excercise.date.substring(0, 10)}</td>
                {/* <td>{excercise.date}</td> */}
                <td  style={{color: 'dodgerblue'}} onClick={() => removeExcercise(excercise._id)}>Remove</td>
                <td className='edit' type='submit' onClick={()=> goToEdit(excercise._id)} 
                >Edit</td>
                </tr>
        
            )
        }) :  <p style={{marinTop: '2rem'}}>Your table is Empty</p>}
             </tbody>
</table>
          </>
    )
  }

export default Content