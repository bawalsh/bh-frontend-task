import React from 'react'

import styles from 'components/BeerDetail/BeerDetail.module.css'

export type Props = {
  name: string
  tagline: string
  imageUrl: string
  abv: number
  description: string
  firstBrewed: string
  foodPairings: string[]
}

const BeerDetail: React.FC<Props> = ({
  name,
  tagline,
  imageUrl,
  abv,
  description,
  firstBrewed,
  foodPairings,
}) => (
  <section className={styles.container}>
    <img src={imageUrl} className={styles.image} alt={name} />
    <div className={styles.content}>
      <h2 className={styles.heading}>{name}</h2>
      <p className={styles.tagline}>{tagline}</p>
      <p>{description}</p>
      <span className={styles.abv}>
        {abv}
        <br />
        ABV
      </span>
      <p>First Brewed: {firstBrewed}</p>
      <h3>Food Pairings:</h3>
      <ul>
        {foodPairings.map((foodPairing) => (
          <li key={foodPairing}>{foodPairing}</li>
        ))}
      </ul>
    </div>
  </section>
)

export default BeerDetail
