import React from 'react'
import { Link } from 'react-router-dom'

import styles from 'components/BeerCompact/BeerCompact.module.css'
import { trimText } from 'utils'

export type Props = {
  name: string
  tagline: string
  imageUrl: string
  abv: number
  urlToBeerDetails: string
}

/**
 * Shows a summary of a beer's most important details
 * @param name - The name of the beer
 * @param tagline - The tagline of a beer
 * @param imageUrl - The URL of the beer's image
 * @param abv - The Alcohol By Volume of the beer
 * @param urlToBeerDetails - The URL to view the beer details
 */
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
        <h2 className={styles.heading}>{trimText(name)}</h2>
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
