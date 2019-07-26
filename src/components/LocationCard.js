import React from 'react'

export default function LocationCard (props) {
  const { location } = props;
  return (
    <section className="char-card">
      <div className="card-info">
        <h3>{location.name}</h3>
        <p>Type: {location.type}</p>
        <p>Dimension: {location.dimension}</p>
      </div>
    </section>
    )
}
