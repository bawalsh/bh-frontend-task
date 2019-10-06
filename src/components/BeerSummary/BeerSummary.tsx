import React from 'react'
import { Link } from 'react-router-dom'

import styles from 'components/BeerSummary/BeerSummary.module.css'
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
const BeerSummary: React.FC<Props> = ({
  name,
  tagline,
  imageUrl,
  abv,
  urlToBeerDetails,
}) => (
  <section className={styles.container}>
    <img src={imageUrl} className={styles.image} alt={name} />
    <div className={styles.content}>
      <div>
        <h2 className={styles.heading}>
          <Link to={urlToBeerDetails}>{trimText(name)}</Link>
        </h2>
        <p className={styles.tagline}>{tagline}</p>
      </div>
      <p>
        <span className={styles.abv}>ABV: </span>
        {abv}
      </p>
    </div>
  </section>
)

export default BeerSummary
