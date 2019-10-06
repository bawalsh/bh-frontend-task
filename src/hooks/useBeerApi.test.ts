import { renderHook } from '@testing-library/react-hooks'
import useBeerApi from 'hooks/useBeerApi'

describe('useBeerApi', () => {
  it('should set error when fetching fails', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useBeerApi('/fake-endpoint')
    )

    const [, errorBeforeFetch] = result.current
    expect(errorBeforeFetch).toBeFalsy()

    await waitForNextUpdate()

    const [, errorAfterFetch] = result.current
    expect(errorAfterFetch).toBeTruthy()
  })

  it('should set data when fetching succeeds', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useBeerApi('/beers'))

    const [dataBeforeFetch] = result.current
    expect(dataBeforeFetch).toBeFalsy()

    await waitForNextUpdate()

    const [dataAfterFetch] = result.current
    expect(dataAfterFetch).toBeTruthy()
  })

  it('should update data when endpoint changes', async () => {
    const { result, waitForNextUpdate, rerender } = renderHook(
      (endpoint: string = '/beers/1') => useBeerApi(endpoint)
    )

    await waitForNextUpdate()
    const [firstBeer] = result.current
    expect(firstBeer).toBeTruthy()

    rerender('/beers/2')

    await waitForNextUpdate()
    const [secondBeer] = result.current
    expect(secondBeer).toBeTruthy()
    expect(secondBeer).not.toBe(firstBeer)
  })
})
