import React from 'react'
import { Link } from 'react-router-dom'

import styles from 'components/BeerCompact/BeerCompact.module.css'
import { trimName } from 'utils'

export type Props = {
  name: string
  tagline: string
  imageUrl: string
  abv: number
  urlToBeerDetails: string
}

const BeerCompact: React.FC<Props> = ({
  name,
  tagline,
  imageUrl,
  abv,
  urlToBeerDetails,
}) => (
  <section className={styles.container}>
    <img src={imageUrl} className={styles.image} alt={name} />
    <div className={styles.content}>
      <Link to={urlToBeerDetails}>
        <h2 className={styles.heading}>{trimName(name)}</h2>
      </Link>
      <p className={styles.tagline}>{tagline}</p>
      <span className={styles.abv}>
        {abv}
        <br />
        ABV
      </span>
    </div>
  </section>
)

export default BeerCompact
