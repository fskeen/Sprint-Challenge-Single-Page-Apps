import React from 'react'

export default function CharacterCard (props) {
  const { char } = props;
  return (
    <section className="char-card">
      <img src={char.image} alt={char.name}></img>
      
      <div className="card-info">
        <h3>{char.name}</h3>
        <p>Location: {char.location.name}</p>
        <p>Origin: {char.origin.name}</p>
      </div>
    </section>
    )
}
