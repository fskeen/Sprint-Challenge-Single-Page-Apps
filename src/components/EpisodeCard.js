import React from 'react'

export default function LocationCard (props) {
  const { episode } = props;
  return (
    <section className="char-card">
      <div className="card-info">
        <h3>{episode.name}</h3>
        <p>Air date: {episode.air_date}</p>
        <p>Episode: {episode.episode}</p>
      </div>
    </section>
    )
}
