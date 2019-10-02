import React, { useEffect, useState } from 'react'

import { API_URL } from 'config'
import styles from 'components/Beers/Beers.module.css'
import BeerCompact from 'components/BeerCompact/BeerCompact'

type BeersResponse = {
  id: number
  name: string
  tagline: string
  image_url: string
  abv: number
}[]

const Beers: React.FC = () => {
  const [beers, setBeers] = useState<BeersResponse>([])

  useEffect(() => {
    let shouldSet = true

    const fetchBeers = async () => {
      const res = await fetch(`${API_URL}/beers`)

      if (res.ok && shouldSet) {
        setBeers(await res.json())
      }
    }

    fetchBeers()
    return () => {
      shouldSet = false
    }
  }, [])

  return (
    <>
      <h1 className={styles.heading}>Beers</h1>
      <ul className={styles.list}>
        {beers.map((beer) => {
          const urlToBeerDetails = `/${beer.id}`

          return (
            <li key={beer.id} className={styles.item}>
              <BeerCompact
                name={beer.name}
                tagline={beer.tagline}
                imageUrl={beer.image_url}
                abv={beer.abv}
                urlToBeerDetails={urlToBeerDetails}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Beers
