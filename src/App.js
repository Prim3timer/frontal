import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom'
// import logo from './logo.svg'
import css from './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from "react"
import axios from 'axios'

import ControlPanel from './navbar'
import GetUsers from './users-list'
import CreateExcercise from './createExcercise'
import EditExcercise from './editExcercise'
import Users from './users-list'
import CreateUser from './createuser'
import Excercises from './excercise-list'
import RemoveExcercise from './removeExcercise'



function App() {
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date, setDate] = useState(new Date())
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')
  const [excercises, setExcercises] = useState([])
  const [headsUp, setHeadsUp] = useState('')
  const [isWhat, setIsWhat] = useState('createUser')
  const [marker, setMarker] = useState('')
 
  // let [checker, setChecker] = useState('createExcercise')

  let fetchExcercises = async () => {
    try {
      const response = await axios.get('https://dosal.onrender.com/excercises')
      if (response){
        console.log(response.data.excercise)
        setExcercises(response.data.excercise)
        
      }
      
    } catch (error) {
      console.log(error)
    }
    
            }
            useEffect(()=> {
                fetchExcercises()
            }, [])

           

              // const [excercises, setExcercises] = useState([])
             
              let fetchUsers =async  () => {
                try {
                  const response = await axios.get('https://dosal.onrender.com/users')
                  if (response.data.users.length > 0){
                    // const newList = response.data.map((user)=> user.username)

                    
                    setUsers(response.data.users)
                    setUsername(response.data.users[0].username)
                    console.log(users)
                  }

                } catch (error){
                  console.log(error)
                }     
                
              }
              useEffect(()=> {
                fetchUsers()   
              }, [])
              
              
              const handleSubmit = async (e)=> {
                e.preventDefault()
                const excercise = {
                  username: username,
                  description: description,
                  duration: duration,
                  date: date
                  
                }

               
              
                const excercises = await axios.get('https://dosal.onrender.com/excercises')
                let theMatch = excercises.data.excercise.find((session) => session.username === excercise.username )
                if (theMatch){
                  setHeadsUp('Name already has a log!')
                  setTimeout(()=> {
                    setHeadsUp('')
                  },3000)
                  return
                } else {

                  await axios.post('https://dosal.onrender.com/excercises', excercise)
                  const newList = excercises.data.excercise.map((excercise)=> excercise)
                  if (excercises.data.excercise.length > 0){
                    
                    setExcercises(newList)
                  }
                }
                
                setIsWhat('getExcercises')
              }

              
              
              // const {id} = useParams()
              let handleDelete = async (id)=> {
                const currentUser = users.find((user)=> user._id ===id)
                const currentExcercise = excercises.find((session)=> session.username === currentUser.username)
                if(currentExcercise) removeExcercise(currentExcercise._id)
                
                await axios.delete(`https://dosal.onrender.com/users/delete/${id}`)
                
                let newList = users.filter((user)=> user._id !== id )
                setUsers(newList)
               setIsWhat('getUsers' )
              }


              
              const removeExcercise = async (id)=>{
                await axios.delete(`https://dosal.onrender.com/excercises/remove/${id}`)
                let newList = excercises.filter((excercise)=> excercise._id !== id )
                setExcercises(newList)
                console.log(id)
              }

              
            let checker = isWhat === 'createUser'? <CreateUser users={users}
            setIsWhat={setIsWhat} setUsers={setUsers} /> : isWhat ==='getUsers' ?   <GetUsers users={users}
            handleDelete={handleDelete}/> : isWhat ==='createExcercise' ?  <CreateExcercise
            users={users}
            setUsers={setUsers}
            handleSubmit={handleSubmit}
            username={username}
            description={description}
            setDescription={setDescription}
            duration={duration}
            setDuration={setDuration}
            date={date}
            setDate={setDate}
            setUsername={setUsername}
            excercises={excercises}
            setExcercises={setExcercises}
            headsUp={headsUp}
          />
              : isWhat === 'getExcercises' ? <Excercises excercises={excercises}
              setIsWhat={setIsWhat}
              isWhat={isWhat}
              removeExcercise={removeExcercise}
              marker={marker}
              setMarker={setMarker}
             />  : <CreateUser user={users}   setIsWhat={setIsWhat} setUsers={setUsers} />

              const changer = (stats)=> {
               setIsWhat(stats)
              }   
             
              return (
                <div>
                  <ControlPanel changer={changer}/>
                  {checker}
    </div>
  );
}


export default App;
