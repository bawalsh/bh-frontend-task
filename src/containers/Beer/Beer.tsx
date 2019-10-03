import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { API_URL } from 'config'
import Loader from 'components/Loader/Loader'
import styles from 'containers/Beer/Beer.module.css'

interface Params {
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
}

const Beer: React.FC<RouteComponentProps<Params>> = ({ match }) => {
  const [beer, setBeer] = useState<BeerResponse>()

  useEffect(() => {
    let shouldSet = true

    const fetchBeer = async () => {
      const res = await fetch(`${API_URL}/beers/${match.params.id}`)

      if (res.ok && shouldSet) {
        setBeer((await res.json())[0])
      }
    }

    fetchBeer()
    return () => {
      shouldSet = false
    }
  }, [match.params.id])

  if (beer == null) return <Loader message={'Loading beer details'} />

  return (
    <>
      <h1 className={styles.pageHeading}>Beer Details</h1>
      <br />
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
    </>
  )
}

export default Beer
