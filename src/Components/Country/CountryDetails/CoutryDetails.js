import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import '../CountryDetails/CountryDetail.css'
import Details from '../../Details/Details';

const CoutryDetails = () => {
    const {countryName} = useParams();
    const [cntryDetails , setCntryDetails] = useState([]);
    useEffect( () => {
        // NAME https://restcountries.eu/rest/v2/name/{name}
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCntryDetails(data);
        })
    },[]);
    return (
        <div>
            <Link to={`/home`}>Go Back</Link>
            <h1 style={{textAlign: 'center'}}>{countryName}</h1> 
            <div className="country-details">
            {
                cntryDetails.map(details => <Details details={details} key={details.alpha3Code}></Details> )
            }
            </div>
        </div>
    );
};

export default CoutryDetails;