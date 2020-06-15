import React from 'react';

const styles = {
    backgroundColor: '#3BE2AB',
    height: '50px',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    paddingTop: '15px'
};

export function Footer() {
    return (
        <div className="footer" style={styles}>
        © 2020 Copyright: <a href="http://localhost:3000">ToDo.com</a>
        </div>
    );
}