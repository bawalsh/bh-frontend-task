import React from 'react'

import styles from 'containers/Beers/Beers.module.css'
import BeerSummary from 'components/BeerSummary/BeerSummary'
import Page from 'containers/Page/Page'
import useBeerApi from 'hooks/useBeerApi'

type BeersResponse = {
  id: number
  name: string
  tagline: string
  image_url: string
  abv: number
}[]

const Beers: React.FC = () => {
  const beers = useBeerApi<BeersResponse>('/beers')

  return (
    <Page isLoading={!beers || beers.length === 0} title="Beers">
      <ul className={styles.list}>
        {beers
          ? beers.map((beer) => {
              const urlToBeerDetails = `/${beer.id}`

              return (
                <li key={beer.id} className={styles.item}>
                  <BeerSummary
                    name={beer.name}
                    tagline={beer.tagline}
                    imageUrl={beer.image_url}
                    abv={beer.abv}
                    urlToBeerDetails={urlToBeerDetails}
                  />
                </li>
              )
            })
          : null}
      </ul>
    </Page>
  )
}

export default Beers
