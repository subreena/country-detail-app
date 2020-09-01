import React from 'react';
import '../Details/Details.css'
const Details = (props) => {
    const {name , flag , capital ,region , subregion , population , callingCodes, timezones , altSpellings} = props.details;
    // console.log(props.details.languages);
    const lang = props.details
    const language = lang.languages.map(lg => lg.name);
    const nlanguage = lang.languages.map(lg => lg.nativeName);
    const cash = lang.currencies.map(al => al.name)
    // console.log(language)
    return (
        <>
           <div className="details-content">
               <img src={flag} alt=""/>
           <ul className="details-text">
           <li>
                   <strong>Name:</strong> {name}
               </li>
               <li>
                   <strong>Other:</strong> {altSpellings.join(', ')}
               </li>
               <li>
                   <strong>Capital city:</strong> {capital}
               </li>
               <li>
               <strong>Location:</strong> {subregion}, {region}
               </li>
               <li>
               <strong>Language:</strong> {language.join(', ')}, {nlanguage}
               </li>
               <li>
               <strong>Currency</strong> {cash.join(' ')}</li>
               <li>
               <strong>Population:</strong> {population}
               </li>
               <li>
               <strong>Timezone:</strong> {timezones.join('  ')}
               </li>
               <li>
               <strong>Calling Codes:</strong> {callingCodes.join(' ')}
               </li>
    
           </ul>
    

           </div>
        </>
    );
};

export default Details;