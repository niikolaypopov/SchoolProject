import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { logout } from '../../../core/api/users.api';

const logoutStyle = {
  cursor: 'pointer', 
  color: '#FFF', 
  backgroundColor: 'red', 
  textTransform: 'uppercase',
  borderColor: 'red'
};

const searchStyle = {
  backgroundColor: '#FFF', 
  color: '#3BE2AB',
  textTransform: 'uppercase',
  borderColor: '#FFF'
}

export const Header = withRouter((props) => {
  console.log('HEADER PROPS +>', props);
  const [isLoggedOut, setLogoutFlag] = useState(false);
  const [searchParam, setSearchParam] = useState('');

  const onLogout = (event) => {
    logout();
    setLogoutFlag(true);
  }

  const onSearchChange = (event) => {
    event.persist();
    setSearchParam(event.target.value);
  }

  const onSearchClick = (event) => {
    event.preventDefault();
    const pathNameUrl = props.location.pathname.substr(1);

    const historyObj = { pathname: `/${pathNameUrl}` };
    if (searchParam) {
      historyObj['search'] = `?q=${searchParam}`;
    }

    props.history.push(historyObj);
  }

    return (
      <>
        { isLoggedOut && <Redirect to="/login" /> }
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#3BE2AB'}} >
        <a className="navbar-brand" href="/home"><img src={require('./../../assets/logo.png')} height="50px"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" >
      <li className="nav-item active">
       <Link to="/home" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/users" className="nav-link">Users</Link>
      </li>
      <li className="nav-item">
        <Link to="/users/create" className="nav-link">Add User</Link>
      </li>
      <li className="nav-item">
        <Link to="/notes" className="nav-link">All ToDo's</Link>
      </li>
      <li className="nav-item">
        <Link to="/notes/my-notes" className="nav-link">My ToDo's</Link>
      </li>
      <li className="nav-item">
        <Link to="/notes/create" className="nav-link">Add ToDo </Link>
      </li>
    </ul>
   
    <form className="form-inline my-2 my-lg-0" onSubmit={onSearchClick}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={onSearchChange}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={searchStyle}>Search</button>
    </form>
    <button className="btn btn-outline-success my-2 my-sm-0 logout-btn ml-2" style={logoutStyle} onClick={onLogout} >Logout</button>
  </div>
</nav>

</>
    );
})