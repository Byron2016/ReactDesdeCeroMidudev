import { useEffect, useState } from "react"
import getGifs from '../services/getGifs'

export function useGifs({keyword} = {keyword: null}) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(function (){
    setLoading(true)

    // Recuperamos keyword del localStorage

    // const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword')

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    getGifs({keyword})
      .then(gifsRetornados => {
        setGifs(gifsRetornados)
        setLoading(false)
        // Guardamos keyword del localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword])

  return {loading, gifs}
}