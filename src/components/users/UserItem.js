import React,{useEffect, useState} from 'react'
import User from './User'
import axios from 'axios';

function UserItem(props) {

    const [user, setUser] = useState({})


    const getProfile =() => {
        const login =   props.match.params.login;
        axios.get(`https://api.github.com/users/${login}`)
        .then(res => {
             setUser(res.data)
        })
    }

    useEffect(() => {
      getProfile();
      
    }, )

    return (

        <div>
            <User user={user}/>
        </div>
    )
}

export default UserItem
