import { useEffect, useState } from 'react'

type TFetchState<T> = {
  state: 'idle' | 'loading' | 'error' | 'success'
  data: null | T[]
  error: null | Error
}

export default function useFetch<T>(url: string) {
  const [fetchState, setFetchState] = useState<TFetchState<T>>({
    state: 'idle',
    data: null,
    error: null
  })

  useEffect(() => {
    async function fetchData() {
      try {
        //set state in loading
        setFetchState((prev) => ({
          ...prev,
          state: 'loading'
        }))
        const res = await fetch(url)
        if (res.ok) {
          const json = await res.json()
          //set data
          setFetchState({
            data: json,
            state: 'success',
            error: null
          })
        } else {
          //set error if exists
          setFetchState({
            data: null,
            state: 'error',
            error: new Error(res.statusText)
          })
        }
      } catch (error) {
        //set error if exists
        setFetchState({
          data: null,
          state: 'error',
          error: error as Error
        })
      }
    }

    fetchData()
  }, [url])

  return fetchState
}
