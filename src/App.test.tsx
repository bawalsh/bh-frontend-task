import React from 'react'
import { Route } from 'react-router-dom'

import { renderWithRouter, fireEvent, waitForElement } from 'test-utils'
import App from 'App'

describe('home', () => {
  it('links beer names to the detail view of the relevant beer', async () => {
    const { getByText, history } = renderWithRouter(
      <>
        <App />
        <Route
          path="/:id"
          render={({ match }) => <div>matching id: {match.params.id}</div>}
        />
      </>
    )

    const firstBeerHeader = await waitForElement(() => getByText('Buzz'))
    const leftClick = { button: 0 }
    fireEvent.click(firstBeerHeader, leftClick)
    expect(getByText('matching id: 1')).toBeTruthy()

    history.goBack()
    const lastBeerHeader = await waitForElement(() => getByText('Bad Pixie'))
    fireEvent.click(lastBeerHeader, leftClick)
    expect(getByText('matching id: 25')).toBeTruthy()
  })

  it('shows loader while beer data is being fetched', async () => {
    const { getByText } = renderWithRouter(
      <>
        <App />
      </>
    )

    const loader = await waitForElement(() => getByText('Loading Beers'))
    expect(loader).toBeTruthy()
    const firstBeerHeader = await waitForElement(() => getByText('Buzz'))
    expect(firstBeerHeader).toBeTruthy()
  })
})

describe('detail', () => {
  it('displays the details of the beer routed to', async () => {
    const startingRoute = '/7'
    const { getByText } = renderWithRouter(
      <>
        <App />
        <Route
          path="/:id"
          render={({ match }) => <div>matching id: {match.params.id}</div>}
        />
      </>,
      { route: startingRoute }
    )

    const title = await waitForElement(() => getByText('AB:12'))
    const tagline = await waitForElement(() =>
      getByText('Imperial Black Belgian Ale.')
    )
    const description = await waitForElement(() =>
      getByText(
        'An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.'
      )
    )
    const abv = await waitForElement(() => getByText('11.2'))
    const brewedDate = await waitForElement(() => getByText('07/2012'))
    const foodPairings = await waitForElement(() =>
      getByText('Raspberry chocolate torte')
    )

    expect(title).toBeTruthy()
    expect(tagline).toBeTruthy()
    expect(description).toBeTruthy()
    expect(abv).toBeTruthy()
    expect(brewedDate).toBeTruthy()
    expect(foodPairings).toBeTruthy()
  })

  it('shows loader while fetching beer details', async () => {
    const startingRoute = '/1'
    const { getByText } = renderWithRouter(
      <>
        <App />
      </>,
      { route: startingRoute }
    )

    const loader = await waitForElement(() => getByText('Loading Beer Details'))
    expect(loader).toBeTruthy()
    const beerHeading = await waitForElement(() => getByText('Buzz'))
    expect(beerHeading).toBeTruthy()
  })
})
