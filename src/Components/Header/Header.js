import React from 'react';

const Header = () => {
    const header = {
        width: '100%',
        padding: '3px' ,
        boxSizing: 'border-box',
        textAlign: 'center',
        background: '#000',
        color: '#fff',
        fontWeight: '900',
        textTransform: 'uppercase' ,


    }
    return (
        <div style={header}>
            <h1>Countries in the world</h1>
        </div>
    );
};

export default Header;