import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import styles from 'containers/Beer/Beer.module.css'
import Page from 'components/Page/Page'
import useBeerApi from 'hooks/useBeerApi'

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
  const [beerData, error] = useBeerApi<BeerResponse>(
    `/beers/${match.params.id}`
  )
  const beer = beerData ? beerData[0] : null

  return (
    <Page title="Beer Details" isLoading={!beer && !error}>
      {error ? <p>{error}</p> : null}
      {beer ? (
        <section className={styles.container}>
          <div className={styles.image}>
            <img
              src={beer.image_url}
              alt={beer.name}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
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
              <span className={styles.detailLabel}>Brewed Date: </span>
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
