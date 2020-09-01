import React from 'react';
import '../Country/Country.css'
import { Link } from 'react-router-dom';

const Country = (props) => {

    const {name , flag , region} = props.country;
    return (
        <div className="country-content">
            <img src={flag} alt={name}/>
            <div className="country-text">
            <p><strong> Name: {name}</strong> <br/>
            <strong>Region: {region}</strong></p>
            <Link to={`name/${name}`} >Click For More Details</Link>
            </div>
            
        </div>
    );
};

export default Country;