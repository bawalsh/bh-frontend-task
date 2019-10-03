import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import styles from 'containers/Beer/Beer.module.css'
import Page from '../Page/Page'
import useBeerApi from '../../hooks/useBeerApi'

type Params = {
  id: string
}

type BeerResponse = {
  id: number
  name: string
  tagline: string
  image_url: string
  abv: number
  description: string
  first_brewed: string
  food_pairing: string[]
}[]

const Beer: React.FC<RouteComponentProps<Params>> = ({ match }) => {
  const beerData = useBeerApi<BeerResponse>(`/beers/${match.params.id}`)
  const beer = beerData ? beerData[0] : null

  return (
    <Page title="Beer Details" isLoading={!beer}>
      {beer ? (
        <section className={styles.container}>
          <img src={beer.image_url} className={styles.image} alt={beer.name} />
          <div className={styles.content}>
            <h2 className={styles.heading}>{beer.name}</h2>
            <p className={styles.tagline}>{beer.tagline}</p>
            <br />
            <p>{beer.description}</p>
            <br />
            <p>
              <span className={styles.detailLabel}>Alcohol By Volume: </span>
              {beer.abv}
            </p>
            <p>
              <span className={styles.detailLabel}>First Brewed: </span>
              {beer.first_brewed}
            </p>
            <br />
            <p className={styles.detailLabel}>Food Pairings:</p>
            <ul className={styles.list}>
              {beer.food_pairing.map((foodPairing) => (
                <li key={foodPairing}>{foodPairing}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </Page>
  )
}

export default Beer
