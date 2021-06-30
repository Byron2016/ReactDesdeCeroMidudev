import {useContext, useEffect, useState } from "react"
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs({keyword} = {keyword: null}) {
  const [loading, setLoading] = useState(false)
  // este es local
  // const [gifs, setGifs] = useState([]) 
  // este es global
  const {gifs, setGifs} = useContext(GifsContext) 

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
  }, [keyword, setGifs])

  return {loading, gifs}
}