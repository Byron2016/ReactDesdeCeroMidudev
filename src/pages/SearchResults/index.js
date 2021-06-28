import { useEffect, useState } from "react"
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs/index'
import getGifs from '../../services/getGifs'

export default function SearchResults ({ params}) {
  const {keyword} = params
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(function (){
    setLoading(true)
    getGifs({keyword})
      .then(gifsRetornados => {
        setGifs(gifsRetornados)
        setLoading(false)
      })
  }, [keyword])

  return <>
    {loading ? <Spinner /> : <ListOfGifs gifs={gifs} /> }
  </>
}