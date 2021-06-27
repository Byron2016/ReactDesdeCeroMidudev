import {useEffect, useState} from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs';

export default function ListOfGifs({params}) {
  const {keyword} = params
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])
  // const [gifs, setGifs] = useState(
  //   { loading: false, results:[]}
  // )

  useEffect(() => {
    setLoading(true)
    // setGifs(actualGifs => ({loading: true, results: gifs.results}))

    getGifs({ keyword })
      .then(gifsRetornados => {
        // setGifs({loading: false, results: gifsRetornados})
        setGifs(gifsRetornados)
        setLoading(false)
      })
  }, [ keyword])

  if(gifs.loading) return <i>Cargando 🕘</i>
  
  return <div>
    {
      gifs.map(({id, title, url}) => 
        <Gif 
          key={id}
          id={id}
          title={title} 
          url={url} 
        />
        )
    }
  </div> 
}