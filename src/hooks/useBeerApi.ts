import { useEffect, useState } from 'react'
import { API_URL } from 'config'

const useBeerApi = <T>(endpoint: string) => {
  const [data, setData] = useState<T>()

  useEffect(() => {
    let shouldSet = true

    const fetchData = async () => {
      const res = await fetch(`${API_URL}${endpoint}`)

      if (res.ok && shouldSet) {
        setData(await res.json())
      }
    }

    fetchData()
    return () => {
      shouldSet = false
    }
  }, [endpoint])

  return data
}

export default useBeerApi
