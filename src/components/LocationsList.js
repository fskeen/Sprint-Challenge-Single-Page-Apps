import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function CharacterList() {
  const [locationArray, setLocationArray] = useState([])
  const [arrayInfo, setArrayInfo] = useState()
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        setLocationArray(response.data.results);
        console.log(response.data.results)
        setArrayInfo(response.data.info);
      })
      .catch(error => {console.log(" Check out this error: ", error)})
  }, [])

  return (<section className='character-list grid-view'>
      {locationArray.map(a => (
        <LocationCard location={a} key={a.id}/>
      ))}
    </section>)
}
