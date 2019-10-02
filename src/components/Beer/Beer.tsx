import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { API_URL } from 'config'
import BeerDetail from 'components/BeerDetail/BeerDetail'

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

  if (beer == null) return null

  return (
    <BeerDetail
      name={beer.name}
      tagline={beer.tagline}
      imageUrl={beer.image_url}
      abv={beer.abv}
      description={beer.description}
      firstBrewed={beer.first_brewed}
      foodPairings={beer.food_pairing}
    />
  )
}

export default Beer
