import React,{useState, useEffect} from 'react'
import axios from 'axios'
import User from './User'
import SearchUsers from './SearchUsers'

function Users(props) {

    const [users, setUsers] = useState([])

 const getUsers = () => {
    axios.get('https://api.github.com/users')
    .then(response => {
      setUsers(response.data)
    })
 }

 useEffect(() => {
  getUsers();
  
 
}, [])


const searchUsersFromGit = async (data) => {
  if(data !== ''){
   await axios.get(`https://api.github.com/search/users?q=${data}`)
    .then(res => {
      setUsers( res.data.items);
     
    })
  }
}



    return (
        <div>
          <div className="row my-2">
            <div className="col-md-12">
              <SearchUsers getUserSearch={searchUsersFromGit}/>
            </div>
          </div>
            <div className="row">
           {
               users.map((user) => {
              return  ( 
            <div className="col-md-4" key={user.id}>
                   <User user={user} />
                  </div>
                  )
               })
           }
           </div>
        </div>
    )
}

export default Users
