import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function CharacterList() {
  const [episodeArray, setEpisodeArray] = useState([])
  const [arrayInfo, setArrayInfo] = useState()
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        setEpisodeArray(response.data.results);
        console.log(response.data.results)
        setArrayInfo(response.data.info);
      })
      .catch(error => {console.log(" Check out this error: ", error)})
  }, [])

  return (<section className='character-list grid-view'>
      {episodeArray.map(a => (
        <EpisodeCard episode={a} key={a.id}/>
      ))}
    </section>)
}
