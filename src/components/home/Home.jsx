import React, { Component } from 'react'; 

const styles = {
   fontSize: '20px',
   color: '#000',
   height: '50px',
};

const logoStyles = {
    backgroundColor: '#3BE2AB',
    height: '200px', 
    width: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    borderRadius: '200px', 
    marginBottom: '20px', 
    
}

export function Home() {
    return (
        <div className="home" style={styles}>
            <div classNam="logo" style={logoStyles}>
            <img src={require('./../assets/logo.png')} height="190px"/>
            </div>
           <p style={{fontSize: '60px'}}>Welcome to ToDo! <br/> Here you can set up your tasks.</p>
        </div>
    );
}