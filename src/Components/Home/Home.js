import React, { useState , useEffect } from 'react';
import '../Home/Home.css'
import Country from '../Country/Country';
import Header from '../Header/Header';


const Home = () => {
      
  const [country , setCountry] = useState([]);
  useEffect( () => {
    const url = `https://restcountries.eu/rest/v2/all`;
    fetch(url)
    .then( response => response.json())
    .then(data => {
      setCountry(data);
      console.log(data);
    })
  },[])
    return (
        <>
        <Header></Header>
        <div className="home-content">
            {
                country.map(cntry => <Country country={cntry} key={cntry.alpha3Code}></Country>)
            }
        </div>
        </>
    );
};

export default Home;