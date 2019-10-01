import React from 'react'
import styles from 'components/BeerCompact/BeerCompact.module.css'

type Compact = {
  name: string,
  tagline: string,
  image: string,
  abv: number
}

const BeerCompact: React.FC<Compact> = ({ name, tagline, image, abv }) => (
  <section className={styles.container}>
    <img src={image} className={styles.image} alt={name} />
    <div>
      <h2 className={styles.heading}>{name}</h2>
      <p>{tagline}</p>
      <p>ABV: {abv}</p>
    </div>
  </section>
)

export default BeerCompact