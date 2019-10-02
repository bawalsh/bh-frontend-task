import React from 'react'

import styles from 'components/BeerCompact/BeerCompact.module.css'
import { trimName } from 'utils'

export type Props = {
  name: string
  tagline: string
  imageUrl: string
  abv: number
}

const BeerCompact: React.FC<Props> = ({ name, tagline, imageUrl, abv }) => (
  <section className={styles.container}>
    <img src={imageUrl} className={styles.image} alt={name} />
    <div className={styles.content}>
      <h2 className={styles.heading}>{trimName(name)}</h2>
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
