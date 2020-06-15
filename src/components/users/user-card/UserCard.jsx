import React from 'react';
import './UserCard.css';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../core/api/users.api';

const cardStyle = {
    width: '100%'
};

export function UserCard({ user, onDelete }) {
    const loggedUser = getLoggedUser();

    return (
        // <div className="card m-3 " style={cardStyle}>
        //     <img className='square'src={user.picture} alt={user.name} style={{ width: '150px', height:'150px', marginLeft: 'auto', marginRight: 'auto'}} />
        //     <div className="card-body">
        //         <h5 className="card-title"><Link to={`/users/${user.id}`}>{user.name}</Link></h5>
        //     </div>
        //     <ul className="list-group list-group-flush">
        //         <li className="list-group-item">Age: {user.age}</li>
        //         <li className="list-group-item">Email: {user.email}</li>
        //     </ul>
        //     <div className="card-body">
        //         { loggedUser.isAdmin && <Link to={`/users/edit/${user.id}`}>Edit</Link> }
        //         { loggedUser.isAdmin && <div className="cursor-pointer" onClick={() => onDelete(user.id)}>Delete</div> }
        //     </div>
        // </div>

            <div className="user-list" style={cardStyle}>
                <ul className="list-group list-unstyled list-group-horizontal">
                    <li className="card-image"><img className='rounded-circle'src={user.picture} alt={user.name} style={{ width: '150px', height:'150px', marginLeft: 'auto', marginRight: 'auto'}} /></li>
                    <li className="user-name">Name: <br/><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                    <li className="user-age">Age: <br/> {user.age}</li>
                    <li className="user-email">Email: <br/> <a href="email">{user.email}</a></li>
                    <li className="user-edit"> { loggedUser.isAdmin && <Link to={`/users/edit/${user.id}`}> <button className="btn btn-outline-success my-2 my-sm-0 edit-button" type="edit" style={{borderColor: '#3BE2AB', backgroundColor: '#3BE2AB', color: '#FFF'}}>EDIT</button></Link>}</li>
                    <li className="user-delete"> { loggedUser.isAdmin && <div className="cursor-pointer" onClick={() => onDelete(user.id)}><button className="btn btn-outline-success my-2 my-sm-0 delete-button" type="edit" style={{borderColor: 'red', backgroundColor: 'red', color: '#FFF'}}>DELETE</button></div> }</li>
                </ul>
            </div>
        
    );
}