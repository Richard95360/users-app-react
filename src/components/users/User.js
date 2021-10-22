import React from 'react'


function User(props) {
    const {login, avatar_url, repos_url} = props.user;
    return (
        <div>
              <div className="card">
                     <img src={avatar_url} alt="images" className="card-img-top" />
                     <div className="card-body">
                         <h4 className="card-title">{login}</h4>
                         <p className="card-text">
                             <a href={'/users/'+props.user.login} className="btn btn-success">Show more</a>
                             <a href={repos_url} className="btn btn-warning">Repository</a>
                         </p>
                     </div>
                    </div>
        </div>
    )
}

export default User
