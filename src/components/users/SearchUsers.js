import React,{useState} from 'react'

function SearchUsers(props) {
   const [search, setSearch] = useState('')

   const handleForm = (e) => {
       
          setSearch( e.target.value)
   }

   const searchUsers = e => {
       e.preventDefault();
     props.getUserSearch(search)
   }
    return (
        
            <form onSubmit={searchUsers}>
                <div className="form-group my-2"> 
                    <input onChange={(e) => handleForm(e)} value={search} placeholder="Search users..." id="search" type="text" className="form-group" />
                </div>
                
                <button className="btn btn-danger btn-block">Search</button>
            </form>
        
    )
}

export default SearchUsers
