/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect, useState } from 'react'

interface DataProp {
  heigth: number
  id: string
  url: string
  width: number
}

export function useFetch(URL: string) {
  const [data, setData] = useState<DataProp[]>([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  useEffect(() => {
    setLoading(true)
    getData()
  }, [])

  useEffect(() => {
    if (error !== null) {
      setError(true)
      setLoading(false)
    }
  }, [error])

  async function getData() {
    try {
      const response = await axios(URL)
      console.log(response)
      setData(response.data)
      setLoading(false)
      setError(null)
    } catch (error) {
      setError(true)
      console.log(error, 'error')
    }
  }
  return {
    data,
    isLoading,
    error,
  }
}
