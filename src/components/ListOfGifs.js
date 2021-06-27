import {useEffect, useState} from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs';

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword })
      .then(gifsRetornados => setGifs(gifsRetornados))
  }, [keyword])
  
  return gifs.map(({id, title, url}) => 
    <Gif 
      key={id}
      id={id}
      title={title} 
      url={url} 
    /> 
  )
}