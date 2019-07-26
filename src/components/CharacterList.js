import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [charArray, setCharArray] = useState([])
  const [arrayInfo, setArrayInfo] = useState()
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharArray(response.data.results);
        // console.log(response.data.results)
        setArrayInfo(response.data.info);
      })
      .catch(error => {console.log(" Check out this error: ", error)})
  }, [])

  return (<section className='character-list grid-view'>
      {charArray.map(a => (
        <CharacterCard char={a} key={a.id}/>
      ))}
    </section>)
}
