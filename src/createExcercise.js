
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.module.css"

let CreateExcercise = ({users, 
    handleSubmit, 
    username,
setUsername,
description,
setDescription,
duration,
setDuration,
date,
setDate,
excercises,
 setExcercises,
 headsUp
}) => {
    
    
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>username:</label>
                <select
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                >
                    {users.map((user)=> {
                        return <option key={user._id}
                        value={user.username}
                        >
                            {user.username}
                        </option>
                    })}
                </select>
                 <br/>
                 <label>Description:</label>
                 <br/>
                <input
                name="description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                />
                <br/>
                <label>Duration:</label>
                <br/>
                <input
                name="duration"
                value={duration}
                onChange={(e)=> setDuration(e.target.value)}
                />
                <br/>
                <label>Date</label>
                <br/>
               <DatePicker
               selected={date}
               onChang={(e)=> setDate(e.target.value)}/>
               <br/>
               <button type="submit" className='pop' onClick={setExcercises(excercises)} >Create Excercise Log</button>
                    <h5>{headsUp}</h5>
            </form>
        </div>  
    )
}

export default CreateExcercise