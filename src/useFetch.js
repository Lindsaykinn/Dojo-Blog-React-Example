import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)  
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('use effect ran')
    // console.log(blogs)
    fetch(url)
      .then(resp => {
        if(!resp.ok){
          throw Error('could not fetch the data for that resource')
        }
        return resp.json()
      })
      .then((data) => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch(error => {
        setIsPending(false)
        setError(error.message)
      })
  }, [url])

  return { data, isPending, error }
}

export default useFetch;