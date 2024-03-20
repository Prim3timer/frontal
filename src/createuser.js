import { useState } from "react"
import axios from "axios"
// import Users from "./users-list"


let CreateUser = ({users, setUsers, setIsWhat}) => {
    const [username, setUsername] = useState('')
    const [warning, setWarning] = useState('')
    
    
    console.log(users)
    const handleSubmit = async (e)=> {
        e.preventDefault()
        const user = {
            username: username,
        }
        console.log(user)
      const theMatch = users.find((person)=> person.username.toLowerCase() === user.username.toLowerCase())
      if (theMatch){
        console.log('oops! we have a match')
        setWarning('Name already in List')
        setTimeout(()=> {
            setWarning('')
        }, 3000)

    } else {

       const response = await axios.post('https://dosal.onrender.com/users/post', user)
       
        setIsWhat('getUsers')
    }
        
    
        setUsername('')
        
    }
    return (
        <div>
            <h3>Create User</h3>
            <form onSubmit={handleSubmit} >
                <label>username:</label>
                <input
                type="text"
                required
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                />
                <br/>
               <button type="submit" className="pop">Create User</button>
               <h3>{warning}</h3>
            </form>
        </div>
    )
}

export default CreateUser