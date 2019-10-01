import React from 'react'
import BeerCompact from 'components/BeerCompact/BeerCompact'

const App: React.FC = () => (
  <>
    <div>Have a look at the README for instructions</div>
    <div>
      Edit <code>src/App.tsx</code> and save to reload.
    </div>

    <BeerCompact
      name='Buzz'
      tagline='A Real Bitter Experience.'
      image='https://images.punkapi.com/v2/keg.png'
      abv={4.5}
    />
  </>
)

export default App
