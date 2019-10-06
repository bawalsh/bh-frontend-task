import { useEffect, useState } from 'react'
import { API_URL } from 'config'

const useBeerApi: <T>(x: string) => [T | undefined, string] = <T>(
  endpoint: string
) => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState('')

  useEffect(() => {
    let shouldSet = true

    const fetchData = async () => {
      const res = await fetch(`${API_URL}${endpoint}`)

      if (shouldSet) {
        if (res.ok) {
          setError('')
          setData(await res.json())
        } else {
          setError('Could not fetch data')
        }
      }
    }

    fetchData()
    return () => {
      shouldSet = false
    }
  }, [endpoint])

  return [data, error]
}

export default useBeerApi
